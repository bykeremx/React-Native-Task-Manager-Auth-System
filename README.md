# React Native Görev Yöneticisi ve Kimlik Doğrulama Sistemi 

![React Native](https://img.shields.io/badge/React%20Native-blue?style=for-the-badge&logo=react) ![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js) ![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## 📝 Genel Bakış / Overview
Bu proje, React Native ile oluşturulmuş bir **Görev Yöneticisi Uygulaması**dır. REST API ile iletişim kurar ve bir kimlik doğrulama sistemi ile görev yönetimi için CRUD işlemlerini içerir. Backend Node.js ile geliştirilmiştir.  
This project is a **Task Manager Application** built with React Native that communicates with a REST API. It includes an authentication system and CRUD operations for task management. The backend is powered by Node.js.

---

## 📂 Depo Detayları / Repository Details
**GitHub Kullanıcı Adı / Username:** `bykeremx`  
**Depo Adı / Repository Name:** `React-Native-Task-Manager-Auth-System`

---

## 🚀 Özellikler / Features
- **Kimlik Doğrulama Sistemi / Authentication System**
  - Kullanıcı Girişi / User Login
  - Kullanıcı Kaydı / User Registration
- **Görev Yönetimi / Task Management**
  - Tüm görevleri listele / Fetch all tasks
  - Yeni görev ekle / Add a new task
  - Görev durumunu düzenle (is-active) / Edit task status (is-active)
  - Görevleri sil / Delete tasks
- **React Native Arayüzü / UI**
  - Basit ve kullanıcı dostu tasarım / Simple and intuitive design
  - Mobil platformlar için optimize edildi / Optimized for mobile platforms

---

## 🛠️ Endpointler / Endpoints
Uygulama aşağıdaki endpointler ile iletişim kurar:  
The app communicates with the following endpoints:

### Kullanıcı Kimlik Doğrulama / User Authentication:
- **POST** `http://localhost:3005/api/user/login`
- **POST** `http://localhost:3005/api/user/register`

### Görev Yönetimi / Task Management:
- **GET** `http://localhost:3005/api/not/` - Tüm görevleri getir / Fetch all tasks
- **POST** `http://localhost:3005/api/not/` - Yeni görev ekle / Add a new task
- **DELETE** `http://localhost:3005/api/not/{id}` - Görevi ID ile sil / Delete a task by ID
- **PUT** `http://localhost:3005/api/not/is-active/{id}` - Görev durumunu güncelle / Update task status

---

## 🔧 Kurulum / Installation
Proje kurulum adımları:  
Follow these steps to set up the project:

### 1. Depoyu Klonlayın / Clone the Repository
```bash
git clone https://github.com/bykeremx/React-Native-Task-Manager-Auth-System.git
```

### 2. Backend ve Mobil Dizine Geçiş / Navigate to Backend and Mobile Directories
Proje iki ana dizinden oluşmaktadır:
- **Backend** dizini: Node.js sunucusu
- **Mobil** dizini: React Native uygulaması

```bash
cd React-Native-Task-Manager-Auth-System
```

#### Backend İçin:
```bash
cd backend
npm install
npm run dev
```

#### Mobil İçin:
```bash
cd mobil
npm install
npx expo start
```

---

## 🖼️ Ekran Görüntüleri / Screenshots

| Giriş Ekranı / Login Screen | Kayıt Ekranı / Register Screen | Görev Listesi / Task List | Görev Ekle / Add Task |
|--------------|----------------|-----------|----------|
| ![Login Screen](https://via.placeholder.com/150) | ![Register Screen](https://via.placeholder.com/150) | ![Task List](https://via.placeholder.com/150) | ![Add Task](https://via.placeholder.com/150) |

---

## 📜 Lisans / License
Bu proje **MIT Lisansı** ile lisanslanmıştır. Kendi projelerinizde kullanabilir ve değiştirebilirsiniz!  
This project is licensed under the **MIT License**. Feel free to use and modify it for your own projects!

---

## 🤝 Katkıda Bulunma / Contributing
Katkılar memnuniyetle karşılanır! Bu projeyi geliştirmek isterseniz, lütfen depoyu fork edin ve bir pull request gönderin. Büyük değişiklikler için önce bir issue açarak tartışma başlatmanızı öneririz.  
Contributions are welcome! If you'd like to improve this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

---

## 💻 Kullanılan Teknolojiler / Technologies Used
- **Frontend:** React Native
- **Backend:** Node.js with Express.js
- **Database:** MongoDB (veya kurulumunuza göre uyarlayın / or adapt based on your setup)

---

## 🌟 Teşekkürler / Acknowledgments
Bu projeye ilham veren açık kaynak topluluğuna özel teşekkürler! 😊  
Special thanks to the open-source community for inspiring this project! 😊

---

## 📫 İletişim / Contact
Herhangi bir sorunuz veya öneriniz varsa [GitHub](https://github.com/bykeremx) üzerinden bana ulaşabilirsiniz!  
Feel free to reach out via [GitHub](https://github.com/bykeremx) if you have any questions or suggestions!

