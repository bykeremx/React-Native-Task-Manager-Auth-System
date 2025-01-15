import { useContext, useState } from 'react';
import TaskContext from '../components/Context/TaskProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useTaskCustom() {
    const { TaskState, TaskDispatch } = useContext(TaskContext);
    const { tasks } = TaskState;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Görevleri getirme metodu
    const getTasks = async () => {
        setLoading(true);
        try {
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            if (!user || !user.token) {
                setError('User not authenticated.');
                return false;
            }

            const response = await fetch('http://192.168.1.7:3005/api/not/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (!response.ok) {
                setError('Failed to fetch tasks.');
                return false;
            }

            const data = await response.json();
            TaskDispatch({ type: 'GET_TASKS', payload: data.notes });
            return true;
        } catch (error) {
            setError('Error fetching tasks: ' + error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Yeni görev oluşturma metodu
    const createTask = async (title, content) => {
        setLoading(true);
        try {
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            if (!user || !user.token) {
                setError('User not authenticated.');
                return false;
            }

            const response = await fetch('http://192.168.1.7:3005/api/not/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ title, content }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Failed to create task.');
                return false;
            }

            // Görev başarıyla oluşturulduktan sonra görevleri yeniden al
            // console.log(updated);
            const updated = await getTasks();
            console.log(tasks);
            
            if (updated) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError('Error creating task: ' + error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };
    //delete 
    const deleteTask = async (id) => {
        setLoading(true);
        try {
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            if (!user || !user.token) {
                setError('User not authenticated.');
                return false;
            }
            const response = await fetch(`http://192.168.1.7:3005/api/not/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            })
            const data = await response.json();
            if (!response.ok) {
                setError(data.message || 'Failed to delete task.');
                return false;
            }
            // Görev başarıyla silindiğinde görevleri yeniden al
            const updated = await getTasks();
            console.log(tasks);
            if (updated) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError('Error deleting task:' + error.message);
            return false;
        }
        finally {
            setLoading(false);
        }
    }

    //görevi tamamla
    const completeTask = async (id) => {
        setLoading(true);
        try {
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            const response = await fetch(`http://192.168.1.7:3005/api/not/is-active/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    status: "pasive"
                }),
            })
            const data = await response.json();
            if (!response.ok) {
                setError(data.message || 'Failed to complete task.');
                return false;
            }
            // Görev başarıyla tamamlandığında görevleri yeniden al
            const updated = await getTasks();
            if (updated) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError('Error completing task:' + error.message);
            return false;
        }finally{
            setLoading(false);
        }
    }
    return { tasks, getTasks, createTask, loading, error, deleteTask ,completeTask };
}