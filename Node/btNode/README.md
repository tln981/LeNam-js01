# Bài tập Node.js (Buổi 5)
1. Đọc file json.
* File: readJson.js.
* Cách sử dụng: node <đường dẫn file readJson.js> [<đường dẫn file json 1> <đường dẫn file json 2> ...]
* Trả về: in ra màn hình console javascript object của các file json.
2. Ghi file json.
* File: writeJson.js.
* Cách sử dụng: node <đường dẫn file writeJson.js> <tên trường mới cần thêm hoặc tên trường cần update> <giá trị trường mới>
* Trả về: file json sau khi chỉnh sửa.
3. Tìm tất cả hình trong folder.
* File: allFilePictureÌnFolder.js.
* Cách sử dụng: node <đường dẫn file allFilePictureInFolder.js> <đường dẫn folder cần tìm tất cả file hình>
* Trả về: in ra màn hình console tất cả đường dẫn file hình trong folder.
4. Copy tất cả file png sang folder mới.
* File: copyPNGFile.js.
* Cách sử dụng: node <đường dẫn file copyPNGFile.js> <đường dẫn folder cần copy hình> <đường dẫn folder chứa hình mới>
* Trả về: tất cả file hình trong folder đầu tiên tại vị trí folder mới.
5. Thay đổi kích thước file ảnh (resize 70%).
* File: resizePicture.js.
* Cách sử dụng: node <đường dẫn file resizePicture.js> <đường dẫn chứa hình cần resize> <đường dẫn folder chứa hình mới>
* Trả về: tất cả file ảnh ở folder đầu tiên đã được resize 70% tại vị trí folder mới.
* Lưu ý: Sử dụng thư viện sharp. Để cài thư viện dùng lệnh npm install sharp.
6. Tạo file index.js có import file thư viện.
* File: createJSFile.js.
* Cách sử dụng: node <đường dẫn file createJSFile.js> <đường dẫn file chứa các file js,ts>.
* Trả về: file index.js có import class dựa vào file .ts, .js tại thư mục thực hiện lệnh node.
* Lưu ý: thư mục chứa class phải là thư mục con hoặc nằm trong thư mục con của folder thực hiện lệnh node.