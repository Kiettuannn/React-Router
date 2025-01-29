# React Router
- React router là một thư viện viết bằng JS, dùng để quản lý routing trong các trang web

### `CÁCH SỬ DỤNG`
**Câu lệnh npm install reaact-router-dom**
- Có thể đọc thêm doc ở đây:
- Trang chủ: https://domain.com
- Trang liên hệ: https://domain.com/contact
- Trang blog: https://domain.com/blog

# Các components 
### `BrowserRouter`
- Để kết nối ứng dụng của bạn với URL của trình duyệt thì chúng ta phải import BrowserRouter và bọc nó bên ngoài app (component App)
- ![image](https://github.com/user-attachments/assets/2a5fd5a7-a999-48f0-a003-368da7790cb7)

### `Routes`
- Cung cấp các tuyến đường để điều hướng các thành phần của ứng dụng React. Dùng nó bọc bên ngoài các route
- Kiểu như các ul chứa các li (route)
![image](https://github.com/user-attachments/assets/aa3ea0aa-caae-4d73-b433-1453018bbdcb)

### `Route`
- Để route đến 1 component cụ thể nào đó
![image](https://github.com/user-attachments/assets/1b680695-7980-4590-b949-dcc4833448d2)

### `Link`
- Cho phép link sang trang khác nhưng không cần phải load lại trang như thẻ a
  
### `Outlet`
- Dùng để xác định vị trí hiển thị componet con ở trong route
- Ví dụ ở trang này:
![image](https://github.com/user-attachments/assets/c4ab72e0-3c65-4114-a013-5fef73bb5d5c)
- Cả trang được bọc bởi route LayoutDefault như ở các hình ảnh trước, và ta cần phải sử dụng Outlet để xác định được vị trí mà muốn hiển thị **nội dung** của các component mà nó bọc lại thì phải cần Outlet
![image](https://github.com/user-attachments/assets/8ab9e2a1-731e-4939-b63f-19eb3234b42a)
  
### `NavLink`
- Thằng này cũng giống như thẻ Link, nhưng khác ở chỗ nếu Link trùng với NavLink thì nó sẽ tự động thêm class Active (cái này thường dùng để CSS màu khác cho dễ nè)
![image](https://github.com/user-attachments/assets/7127b484-7fee-4fce-b71f-c7724abe2f1c)

### `Navigate`
- Navigate: Sử dụng để chuyển đến 1 trang nào đó thôi
![image](https://github.com/user-attachments/assets/bc59e3cc-1bd1-40ba-8546-76a7e42d63d4)

# Nested Routes
- Để tạo ra các route con lồng nhau
![image](https://github.com/user-attachments/assets/46aab997-6c63-4f89-9364-aa7e261e90f5)

# Index Routes
- Để hiển thị các component con ra ngoài component cha
![image](https://github.com/user-attachments/assets/06949c40-e137-4df1-b164-fe9a7da08328)
- Như ở đây muốn hiển thị BlogAll ra ngoài route Blog thì ta gán index như thế này (mặc định thì nó mang giá trị là true)

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














