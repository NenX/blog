| 类型      | 表示                                                                                                                              |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| BSTR      | 32-bit 字符指针                                                                                                                   |
| BYTE      | 8-bit整数，未带正负号                                                                                                             |
| COLORREF  | 32-bit数值，代表一个颜色值                                                                                                        |
| DWORD     | 32-bit整数，未带正负号                                                                                                            |
| LONG      | 32-bit整数，带正负号                                                                                                              |
| HANDLE    | 32位无符号的整数，用作句柄                                                                                                        |
| HINSTANCE | 32位的无符号整数，用作实例句柄                                                                                                    |
| HWND      | 32位的无符号整数，用作窗口句柄                                                                                                    |
| HDC       | 一个设备描述背景的句柄                                                                                                            |
| UINT      | 新的Win32数据类型，它会把一个参数强制转换成Windows3.x应用中的16位值或Win32应用中的32位                                            |
| WCHAR     | 16位的UNICODE字符，用来表示世界上所有已知的书写语言的符号所谓句柄，就是一个唯一的数，用以标识许多不同的对象类型，如窗口、菜单等。 |
| LPARAM    | 32-bit整数，作为窗口函数或callback函数的一个参数                                                                                  |
| LPCSTR    | 32-bit指针，指向一个常数字符串                                                                                                    |
| LPSTR     | 32-bit指针，指向一个字符串                                                                                                        |
| LPCTSTR   | 32-bit指针，指向一个常数字符串，此字符串可以移植到Unicode和DBCS                                                                   |
| LPTSTR    | 32-bit指针，指向一个字符串，此字符串可以移植到Unicode和DBCS                                                                       |
| LPVOID    | 32-bit指针，指向一个未指定类型的数据                                                                                              |
| LPRESULT  | 32-bit数值，作为窗口函数或callback函数的返回值                                                                                    |
| UINT      | 在Win16中是一个16-bit 未带正负号整数，在Win32中是一个32-bit 未带正负号整数，                                                      |
| WNDPROC   | 32-bit指针，指向一个窗口函数                                                                                                      |
| WORD      | 16-bit 整数 ，未带正负号                                                                                                          |
| WPARAM    | 窗口函数或callback函数的一个参数，在Win16中是16-bit，在Win32中是32-bit                                                            |
| LPCWSTR   | 指向一个非终止常量16-bitWindows(ANSI)类型的字符串                                                                                 |
| BOOL      | 布尔类型值(应为 TRUE 或 FALSE)                                                                                                    |
| BOOLEAN   | 布尔类型值(应为 TRUE 或 FALSE)                                                                                                    |