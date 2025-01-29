![image](https://github.com/user-attachments/assets/bfa9a3e8-b24e-4328-a9f5-f0c0c5bc685f)# React Router
- React router là một thư viện viết bằng JS, dùng để quản lý routing trong các trang web

### `CÁCH SỬ DỤNG`
**Câu lệnh npm install reaact-router-dom**
- Có thể đọc thêm doc ở đây:
- Trang chủ: https://domain.com
Trang liên hệ: https://domain.com/contact
Trang blog: https://domain.com/blog
![image](https://github.com/user-attachments/assets/485ead68-9025-4160-8d23-12d95dc1a947)

# Các components 
### `BrowserRouter`
- Để kết nối ứng dụng của bạn với URL của trình duyệt thì chúng ta phải import BrowserRouter và bọc nó bên ngoài app (component App)
- ![image](https://github.com/user-attachments/assets/2a5fd5a7-a999-48f0-a003-368da7790cb7)


### `Routes`
- Cung cấp các tuyến đường để điều hướng các thành phần của ứng dụng React. Dùng nó bọc bên ngoài các route
- Kiểu như các ul chứa các li (route)

### `Route`
- Để route đến 1 component cụ thể nào đó
  
### `Link`
- Cho phép link sang trang khác nhưng không cần phải load lại trang như thẻ a
  
### `Outlet`
- Dùng để xác định vị trí hiển thị componet con ở trong route
  
### `NavLink`
- Thằng này cũng giống như thẻ Link, nhưng khác ở chỗ nếu Link trùng với NavLink thì nó sẽ tự động thêm class Active (cái này thường dùng để CSS màu khác cho dễ nè)
  
### `Navigate`
- Navigate: Sử dụng để chuyển đến 1 trang nào đó thôi

# Nested Routes
- Để tạo ra các route con lồng nhau. Ví dụ cụ thể phía dưới
  
# Index Routes
- Để hiển thị các component con ra ngoài component cha. Ví dụ phía dưới

# Dynamic routes
- Tạo ra các routes động. Ví dụ phía dưới

# Các Hook của React Router
### `useParams`:
- Dùng để lấy được tham số trên param
  
### `useNavigate`:
- Dùng để điều hướng đến 1 trang khác hoặc trở về trang trước đó đã truy cập

# Protected routes
- Cái này giống như để phân quyền thôi, có 2 thành phần public và private

# Route Objects
- Cái này để gom danh sách route lại thành 1 object để gọn hơn, không phải khai báo 1 đống trong file app nữa, ví dụ ở dưới

# Ví dụ tổng quát hết các kiến thức của React Router
- 














