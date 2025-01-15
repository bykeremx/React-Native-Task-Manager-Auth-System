//not kontrolleri 
import expressAsyncHandler from 'express-async-handler'
import NotModel from '../models/NotModel.js'


//not oluştur 
// export const createNote = expressAsyncHandler(async (req, res) => {
//     //not ekleme işlemi
//     const { title, content } = req.body
//     //not eklenecek verilerin doğrulama işlemi yapılacak



//     if (!title || !content) {
//         return res.status(400).json({
//             message: 'Tüm alanları doldurunuz',
//             success: false
//         });
//     }
//     const newNote = {
//         userId: req.user || null,
//         title: title,
//         content: content
//     }
//     try {
//         const cretedNote = await NotModel.create(newNote);
//         res.status(201).json({
//             msg: "Not Başarı ile Eklendi",
//             note: {
//                 title: cretedNote.title,
//                 content: cretedNote.content
//             },
//             success: true
//         })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Not eklenirken bir hata oluştu',
//             error: error.message
//         })
//     }
//     res.status(201).json({ message: 'Not eklendi' });
// })



export const createNote = expressAsyncHandler(async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: 'Tüm alanları doldurunuz',
            success: false
        });
    }

    const newNote = {
        userId: req.user || null,
        title: title,
        content: content
    };

    try {
        const createdNote = await NotModel.create(newNote);
        res.status(201).json({
            msg: "Not Başarı ile Eklendi",
            note: {
                title: createdNote.title,
                content: createdNote.content
            },
            success: true
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Not eklenirken bir hata oluştu',
            error: error.message
        });
    }
});



//notları sil 

export const deleteNote = expressAsyncHandler(async (req, res) => {

    const { id } = req.params;
    try {
        const isNote = await NotModel.findById(id);
        console.log(isNote);
        
        if (!isNote) {
            return res.status(404).json({ message: 'Not Bulunamadı' });
        }
        if (!isNote.userId.equals(req.user)) {
            return res.status(404).json({ message: 'Bu Not Senin Değil Dostum :) ' })
        }
        await isNote.deleteOne();
        res.status(200).json({ message: `Not Silindi`, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Not silinirken bir hata oluştu', error: error.message });
    }
});



//notları güncelle

export const updateNote = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Tüm alanları doldurunuz' });
    }
    try {
        const updateNote = await NotModel.findByIdAndUpdate(id, {
            title: title,
            content: content
        });
        if (!updateNote) {
            return res.status(404).json({ message: 'Not Bulunamadı' });
        }
        res.status(200).json({ message: `Not Güncellendi`, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Not güncellenirken bir hata oluştu', error: error.message });

    }
});

//notları listele

export const getNotes = expressAsyncHandler(async (req, res) => {
    console.log("Notları Listemele Çalışıyor ! ");
    try {
        const allNotes = await NotModel.find({ userId: req.user });
        if (!allNotes) {
            return res.status(404).json({ message: 'Not Bulunamadı' });
        }
        res.status(200).json({
            notes: allNotes,
            success: true
        })
    } catch (error) {
        res.status(500).json({ message: 'Notları listelerken bir hata oluştu', error: error.message });
    }
});



// export const getNotes = expressAsyncHandler(async (req, res) => {
//     console.log("Notları Listemele Çalışıyor ! ");
//     try {
//         const allNotes = await NotModel.find({ userId: req.user });

//         if (!allNotes || allNotes.length === 0) {
//             return res.status(404).json({ message: 'Not Bulunamadı' });
//         }

//         res.status(200).json({
//             notes: allNotes,
//             success: true
//         });

//     } catch (error) {
//         res.status(500).json({ message: 'Notları listelerken bir hata oluştu', error: error.message });
//     }
// });

//note pasive 

export const PasiveNote = expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log("Not Pasive Çalışıyor! ");
    try {
        const note = await NotModel.findByIdAndUpdate(id,{status:"pasive"});
        if (!note) {
            return res.status(404).json({ message: 'Not Bulunamadı' });
        }
        res.status(200).json({
            note: note,
            success: true
        })
    } catch (error) {
        res.status(500).json({ message: 'Not pasif edilirken bir hata oluştu', error: error.message });
    }
});
