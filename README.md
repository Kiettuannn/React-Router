# React Router
- React router là một thư viện viết bằng JS, dùng để quản lý routing trong các trang web

### `CÁCH SỬ DỤNG`
**Câu lệnh npm install react-router-dom**
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
- Tạo ra các routes động.
- Ví dụ như
 ![image](https://github.com/user-attachments/assets/771b0c2e-c688-493e-9a84-bbfd48b337a1)
- Nếu như muốn truy cập vào trang tin tức này, thì cần phải sang trang đó, thì khi đó ta cần phải route đến, nhưng nếu không dùng route động thì sẽ set path và element bằng tay => Không tối ưu
  
**-Cách sử dụng route động:**
- Đầu tiên ta cần phải tạo ra 1 route Detail để hiển thị chi tiết nội dung bài viết đó:
  ![image](https://github.com/user-attachments/assets/7638eb2c-3b7b-48ee-a112-7cb6b9c4ccb6)
  - Đặt biệt ở đây path ta đặt là gì cũng được không nhất thiết là ":id", sở dĩ đặt tên như vậy thì dễ hiểu hơn thôi
    
**-Tiếp theo**:  Ở trang AllBlog, ta sẽ tạo ra danh sách cái bài viết đó, và khi nhấn vào nó sẽ link tới 1 route chứa id của bài viết đó
![image](https://github.com/user-attachments/assets/6d116e01-4818-4951-ab4d-0cadd207cd2e)

**-Tiếp nữa:** Ở trang detail, ta cũng sẽ fetch Api nhưng với cách thức sau
![image](https://github.com/user-attachments/assets/5c05022e-343a-4ae1-a52f-3b6e37b15950)

- Ta đã truyền vào đường link một params.id, cái chấm tới id chính là cái tên mà mình đặt ở path hồi nảy

# Các Hook của React Router
### `useParams`:
- Dùng để lấy được tham số trên param, ở hình ảnh phần Dynamic routes đã có sử dụng rồi đó
  
### `useNavigate`:
- Dùng để điều hướng đến 1 trang khác hoặc trở về trang trước đó đã truy cập
- Cái này cũng giống như nút trở về của trình duyệt vậy
![image](https://github.com/user-attachments/assets/77bc8c4a-b614-427f-a54b-231bd8ecb495)
- Ta truyền vào tham số -1 cho navigate để nó lùi lại 1 trang, nếu như là -2 thì là quay về 2, còn 1 thì tiến tới 1 đơn giản vậy thôi

# Protected routes
- Cái này giống như để phân quyền thôi, có 2 thành phần public và private
- Cái này nó kh có cấu trúc gì đặt biệt, quan trọng là logic mình tự tạo ra
![image](https://github.com/user-attachments/assets/07ae37de-8244-4c9d-929b-009aef5bb221)

# Route Objects
- Cái này để gom danh sách route lại thành 1 object để gọn hơn, không phải khai báo 1 đống trong file app nữa, ví dụ ở dưới
- Như ở các VD trên thì ta thấy các route gom 1 cục ở trong file App, vậy nên ta cần tách nó ra riêng tạo thành 1 objects
- **Bước 1:** Tạo 1 folder route trong thư mục src, trong đó tạo ra 1 file index chứa 1 object các route, cái nào chứa các route con thì thêm 1 key là children để chứa các route con đó, còn như hầu hết đều có 2 key là path và element
  ![image](https://github.com/user-attachments/assets/9308676f-38dd-41e5-8e83-13ccefa2c069)
  
- **Bước 2**: Tạo ra 1 folder chứa AllRoute
![image](https://github.com/user-attachments/assets/8180adcc-7c69-4abd-ab67-302316ce7aec)
- Ta sử dụng useRoutes truyền vào danh sách routes đã tạo trước đó, hàm này sẽ có nhiệm vụ tách các routes này thành các element như ở phía trên vậy, đơn giản là vậy thôi, "chuyển object thành element"

# Và đó là hết về React Route, còn nhiều các hook nữa, nhưng trên đây chính là những cái hay gặp nhất
 














