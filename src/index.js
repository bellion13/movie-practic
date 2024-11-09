
import React from 'react';
import ReactDOM from 'react-dom'; // Sử dụng react-dom (không phải react-dom/client)
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Sử dụng ReactDOM.render để render ứng dụng
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Chỉ định phần tử DOM để mount
);

// Nếu bạn muốn bắt đầu đo hiệu suất trong ứng dụng của mình, hãy truyền một hàm
// để ghi lại kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi tới một điểm cuối phân tích. Tìm hiểu thêm: https://bit.ly/CRA-vitals
reportWebVitals();
