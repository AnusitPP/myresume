import React, { useState } from 'react'; // นำเข้า React และ useState จาก 'react'
import './App.css'; // นำเข้าไฟล์ CSS สำหรับสไตล์ของแอป
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Website from './components/Website';

function App() {
  // กำหนด state สำหรับจัดการกับเมนูที่ถูกเลือก
  const [selectedMenu, setSelectedMenu] = useState('profile');
  // กำหนด state สำหรับจัดการการแสดงผลของ sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // เนื้อหาที่จะแสดงตามเมนูที่เลือก
  const renderContent = () => {
    switch (selectedMenu) {
      case 'profile':
        return <Profile />;
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      case 'certificates':
        return <Certificates />;
      case 'website':
        return <Website />;
      default:
        return <p>ยินดีต้อนรับสู่แอป React ของคุณ!</p>;
    }
  };

  return (
    <div className="App"> {/* ส่วนหลักของคอมโพเนนต์ App */}
      {isSidebarOpen && (
        <div className="sidebar"> {/* เมนูทางด้านซ้าย */}
          <img src="https://avatars.githubusercontent.com/u/170225638?v=4" alt="Profile" className="profile-pic"/> {/* รูปโปรไฟล์ที่อยู่ด้านบนสุดของเมนู */}
          <ul className="menu-list">
            <li onClick={() => setSelectedMenu('profile')} className={selectedMenu === 'profile' ? 'active' : ''}>Profile</li>
            <li onClick={() => setSelectedMenu('education')} className={selectedMenu === 'education' ? 'active' : ''}>Education</li>
            <li onClick={() => setSelectedMenu('experience')} className={selectedMenu === 'experience' ? 'active' : ''}>Experience</li>
            <li onClick={() => setSelectedMenu('certificates')} className={selectedMenu === 'certificates' ? 'active' : ''}>Certificates</li>
            <li onClick={() => setSelectedMenu('website')} className={selectedMenu === 'website' ? 'active' : ''}>My Website</li>
          </ul>
        </div>
      )}
      <button className="sidebar-toggle-small" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? 'Close menu' : 'Open menu'}
      </button>
      <div className="content"> {/* ส่วนเนื้อหาที่จะแสดงทางด้านขวามือ */}
        {renderContent()}
      </div>
    </div>
  );
}

export default App; // ส่งออกคอมโพเนนต์ App เพื่อให้สามารถนำไปใช้ที่อื่นได้
