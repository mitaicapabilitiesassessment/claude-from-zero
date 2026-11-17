/* =====================================================================
   NỘI DUNG KHOÁ HỌC — sửa bài học tại file này
   Mỗi bài gồm:
     part, min, title, tag (tuỳ chọn), lead (mô tả ngắn), goals (mục tiêu),
     body: danh sách khối nội dung, mỗi khối là một mảng:
       ["h", "Tiêu đề mục"]
       ["p", "Đoạn văn (cho phép <b>, <code>, <i>)"]
       ["list", ["ý 1", "ý 2"]]
       ["steps", ["bước 1", "bước 2"]]
       ["code", "Nhãn (vd: PowerShell)", "nội dung lệnh"]
       ["prompt", "nội dung câu lệnh gửi cho Claude"]
       ["tip" | "warn" | "note", "nội dung ghi chú"]
     exercise: bài tập thực hành, recap: danh sách ý chính
   ===================================================================== */
window.LESSONS = [
/* ---------------- BÀI 0 ---------------- */
{
  part: "Mở đầu", min: 3,
  title: "Giới thiệu khoá học & cách học hiệu quả",
  lead: "Khoá học dành cho ai, bạn sẽ làm được gì sau 2 giờ, và cần chuẩn bị những gì trước khi bắt đầu.",
  goals: ["Hiểu bức tranh tổng thể của khoá học", "Chuẩn bị đủ công cụ để làm theo", "Biết cách học để không bị \"ngợp\""],
  body: [
    ["h", "Khoá học này dành cho ai?"],
    ["p", "Cho những người <b>chưa từng viết một dòng code</b>: nhân viên văn phòng, chủ doanh nghiệp nhỏ, giáo viên, người làm marketing, kế toán… Bạn chỉ cần biết dùng máy tính cơ bản và sẵn lòng thử."],
    ["p", "Bạn sẽ không học lập trình. Bạn sẽ học cách <b>giao việc cho một trợ lý AI có thể tự làm việc trên máy tính của bạn</b>: đọc file, tạo file, chạy công cụ, và làm nhiều bước liên tiếp."],
    ["h", "Sau khoá học bạn sẽ có"],
    ["list", [
      "<b>Sản phẩm 1:</b> Bộ báo cáo tự động từ file Excel, đóng gói thành một quy trình dùng lại được.",
      "<b>Sản phẩm 2:</b> Một bản tin cá nhân tự cập nhật mỗi sáng.",
      "<b>Sản phẩm 3:</b> Một website giới thiệu bản thân, có đường link riêng.",
      "Và quan trọng nhất: cách tư duy để tự nghĩ ra những ứng dụng tiếp theo cho công việc của mình."
    ]],
    ["h", "Cần chuẩn bị"],
    ["list", [
      "Một máy tính Windows 10/11 hoặc macOS.",
      "Tài khoản Claude trả phí (gói Pro trở lên) hoặc tài khoản API của Anthropic.",
      "Kết nối Internet ổn định.",
      "Khoảng 2 giờ, có thể chia nhỏ thành nhiều buổi."
    ]],
    ["h", "Cách học hiệu quả nhất"],
    ["steps", [
      "Đọc bài một lượt để hiểu ý tưởng chính.",
      "Mở Claude Code và <b>làm theo từng bước</b>. Mọi khung lệnh đều có nút <b>Sao chép</b>.",
      "Gặp lỗi? Đừng hoảng. Sao chép nguyên thông báo lỗi và dán cho Claude: đó cũng là một kỹ năng bạn sẽ học.",
      "Bấm <b>Đánh dấu hoàn thành</b> cuối mỗi bài để theo dõi tiến độ."
    ]],
    ["tip", "Không cần học một mạch. Mỗi bài chỉ 3–10 phút, hãy học xong một bài rồi thực hành ngay khi còn nhớ."]
  ],
  exercise: "Lấy giấy bút ghi ra <b>3 công việc lặp đi lặp lại</b> mỗi tuần mà bạn thấy tốn thời gian nhất. Giữ danh sách này, bạn sẽ dùng nó suốt khoá học.",
  recap: ["Không cần biết code", "Kết quả là 3 sản phẩm thực tế", "Học đến đâu, thực hành ngay đến đó"]
},
/* ---------------- BÀI 1 ---------------- */
{
  part: "1 · Làm quen", min: 6,
  title: "Tư duy: ba kỹ năng của người dùng AI giỏi",
  lead: "Người dùng AI giỏi không phải người biết nhiều mẹo, mà là người có ba kỹ năng nền tảng: giao việc, kiểm tra và hệ thống hoá.",
  goals: ["Hiểu ba kỹ năng cốt lõi", "Phân biệt yêu cầu mơ hồ và yêu cầu rõ ràng", "Bắt đầu nghĩ về AI như một đồng nghiệp"],
  body: [
    ["h", "Hãy coi AI như một nhân viên mới"],
    ["p", "Hãy tưởng tượng bạn vừa tuyển một nhân viên rất thông minh, làm việc cực nhanh, nhưng <b>hoàn toàn không biết gì về công ty bạn</b>. Bạn sẽ giao việc cho người đó thế nào? Đó chính là cách bạn nên làm việc với Claude."],
    ["h", "Kỹ năng 1: Giao việc rõ ràng"],
    ["p", "Kết quả của AI tốt đến đâu phụ thuộc phần lớn vào việc bạn mô tả rõ đến đâu. So sánh hai cách yêu cầu:"],
    ["prompt", "Viết cho tôi một email."],
    ["prompt", "Viết email gửi 20 khách hàng cũ, thông báo cửa hàng chuyển địa điểm từ ngày 1/12 sang 45 Lê Lợi, Quận 1. Giọng thân thiện, dưới 120 chữ, có lời mời ghé thăm kèm ưu đãi giảm 10% trong tuần đầu."],
    ["p", "Cách thứ hai có <b>bối cảnh, mục tiêu, đối tượng, giới hạn độ dài và giọng văn</b>. Claude không phải đoán."],
    ["h", "Kỹ năng 2: Kiểm tra kết quả"],
    ["p", "AI có thể sai một cách rất tự tin. Người dùng giỏi luôn tự hỏi: <i>Số liệu này có đúng không? Có thiếu gì không? Mình có dám gửi cái này cho sếp không?</i>"],
    ["tip", "Bạn có thể nhờ chính Claude kiểm tra: <i>\"Hãy rà soát lại kết quả vừa rồi, liệt kê những chỗ có thể sai hoặc chưa chắc chắn.\"</i>"],
    ["h", "Kỹ năng 3: Hệ thống hoá"],
    ["p", "Lần đầu làm một việc với AI, bạn mất 30 phút. Người dùng giỏi sẽ <b>lưu lại cách làm</b> để lần sau chỉ mất 1 phút. Ở các bài sau bạn sẽ học cách biến một lần làm thành một quy trình (skill) dùng mãi."],
    ["note", "Ba kỹ năng này không phụ thuộc vào công cụ. Dù sau này AI thay đổi thế nào, chúng vẫn có giá trị."]
  ],
  exercise: "Chọn một việc trong danh sách 3 việc ở Bài 0. Viết yêu cầu giao việc đó cho AI theo cách <b>mơ hồ</b>, rồi viết lại theo cách <b>rõ ràng</b> với đủ bối cảnh, mục tiêu và tiêu chí.",
  recap: ["Giao việc rõ ràng như với nhân viên mới", "Luôn kiểm tra trước khi dùng", "Làm một lần, lưu lại để dùng mãi"]
},
/* ---------------- BÀI 2 ---------------- */
{
  part: "1 · Làm quen", min: 7,
  title: "Claude Code là gì? Khác gì so với Claude Chat?",
  lead: "Claude Chat trả lời bạn. Claude Code làm việc cho bạn. Bài này giúp bạn hiểu sự khác biệt và cài đặt Claude Code lên máy.",
  goals: ["Phân biệt Claude Chat và Claude Code", "Cài đặt Claude Code thành công", "Chạy phiên làm việc đầu tiên"],
  body: [
    ["h", "Chat và Code khác nhau thế nào?"],
    ["list", [
      "<b>Claude Chat</b> (trên trình duyệt hoặc ứng dụng): bạn hỏi, Claude trả lời bằng chữ. Muốn dùng kết quả, bạn phải tự sao chép, tự lưu file.",
      "<b>Claude Code</b> (chạy trên máy bạn): Claude có thể <b>đọc file trong thư mục, tạo file mới, sửa file, chạy công cụ</b> và tự làm nhiều bước liên tiếp cho đến khi xong việc."
    ]],
    ["p", "Ví dụ: với Chat, bạn dán dữ liệu vào và nhận lại một đoạn phân tích. Với Code, bạn nói <i>\"đọc 3 file Excel trong thư mục này và tạo bộ slide báo cáo\"</i>, rồi mở thư mục ra là thấy file slide."],
    ["h", "Terminal là gì? Có đáng sợ không?"],
    ["p", "Claude Code chạy trong <b>Terminal</b>: một cửa sổ chỉ có chữ, nơi bạn gõ lệnh thay vì bấm chuột. Bạn chỉ cần biết vài lệnh, phần còn lại Claude lo."],
    ["list", [
      "Windows: bấm phím Windows, gõ <b>PowerShell</b>, mở ứng dụng Windows PowerShell.",
      "macOS: bấm Cmd + Space, gõ <b>Terminal</b>, nhấn Enter."
    ]],
    ["h", "Cài đặt Claude Code"],
    ["p", "Sao chép lệnh tương ứng với hệ điều hành của bạn, dán vào Terminal và nhấn Enter:"],
    ["code", "Windows · PowerShell", "irm https://claude.ai/install.ps1 | iex"],
    ["code", "macOS / Linux · Terminal", "curl -fsSL https://claude.ai/install.sh | bash"],
    ["p", "Cài xong, <b>đóng Terminal và mở lại</b>, rồi kiểm tra:"],
    ["code", "Terminal", "claude --version"],
    ["warn", "Nếu báo lỗi \"không nhận ra lệnh claude\", hãy khởi động lại máy rồi thử lại. Cách cài đặt có thể thay đổi theo thời gian, hãy đối chiếu với hướng dẫn chính thức tại trang tài liệu của Anthropic nếu lệnh trên không chạy."],
    ["h", "Phiên làm việc đầu tiên"],
    ["steps", [
      "Gõ <code>claude</code> và nhấn Enter.",
      "Lần đầu, Claude sẽ mở trình duyệt để bạn đăng nhập tài khoản Claude.",
      "Đăng nhập xong, quay lại Terminal. Bạn sẽ thấy ô để gõ yêu cầu.",
      "Thử gõ câu chào đầu tiên bên dưới."
    ]],
    ["prompt", "Xin chào! Hãy giới thiệu ngắn gọn bạn có thể giúp gì cho một người không biết lập trình."],
    ["tip", "Gõ <code>/help</code> để xem danh sách lệnh. Nhấn <b>Esc</b> để dừng Claude khi đang làm. Gõ <code>/exit</code> hoặc nhấn Ctrl + C hai lần để thoát."]
  ],
  exercise: "Cài đặt Claude Code, đăng nhập và hỏi Claude: <i>\"Thư mục tôi đang đứng có những file gì?\"</i>. Quan sát cách Claude xin phép trước khi xem file.",
  recap: ["Chat trả lời, Code làm việc trực tiếp trên máy", "Cài bằng một dòng lệnh", "Gõ claude để bắt đầu, Esc để dừng"]
},
/* ---------------- BÀI 3 ---------------- */
{
  part: "1 · Làm quen", min: 8,
  title: "Nhờ Claude dạy lại bạn: chọn việc, tự học, tự gỡ lỗi",
  lead: "Bí quyết lớn nhất của người không biết code: dùng chính Claude làm thầy giáo. Bạn sẽ không bao giờ bị kẹt quá lâu.",
  goals: ["Biết việc nào nên giao cho AI", "Dùng Claude để học khái niệm mới", "Tự gỡ lỗi bằng cách hỏi đúng"],
  body: [
    ["h", "Việc nào nên giao cho Claude?"],
    ["p", "Một việc phù hợp thường có ba đặc điểm:"],
    ["list", [
      "<b>Lặp lại</b>: làm hằng ngày, hằng tuần, hằng tháng.",
      "<b>Có quy tắc</b>: bạn có thể giải thích cách làm cho người khác.",
      "<b>Tốn thời gian nhưng ít sáng tạo</b>: tổng hợp, định dạng, đối chiếu, sao chép."
    ]],
    ["p", "Chưa chắc? Hãy hỏi thẳng Claude:"],
    ["prompt", "Tôi làm nghề [nghề của bạn]. Mỗi tuần tôi thường phải làm các việc sau: [liệt kê]. Hãy chọn ra 3 việc dễ tự động hoá nhất với Claude Code, giải thích vì sao, và ước lượng thời gian tôi tiết kiệm được."],
    ["h", "Dùng Claude để tự học"],
    ["p", "Gặp từ lạ như <i>API</i>, <i>JSON</i>, <i>repository</i>? Đừng tra Google rồi đọc những bài viết khó hiểu. Hãy yêu cầu Claude giải thích theo cách của bạn:"],
    ["prompt", "Giải thích JSON là gì cho một người làm kế toán, dùng ví dụ liên quan đến bảng tính Excel. Tối đa 5 câu."],
    ["tip", "Câu thần chú: <i>\"Giải thích như tôi là người mới hoàn toàn\"</i> hoặc <i>\"Cho tôi một ví dụ đời thường\"</i>."],
    ["h", "Tự gỡ lỗi"],
    ["p", "Lỗi là chuyện bình thường, kể cả với lập trình viên chuyên nghiệp. Quy trình 3 bước:"],
    ["steps", [
      "<b>Sao chép nguyên văn</b> thông báo lỗi (đừng tóm tắt).",
      "Kể cho Claude bạn <b>đang làm gì</b> và <b>mong đợi điều gì</b>.",
      "Yêu cầu Claude <b>giải thích nguyên nhân</b> trước khi sửa, để lần sau bạn tự hiểu."
    ]],
    ["prompt", "Tôi chạy lệnh để mở file báo cáo nhưng gặp lỗi bên dưới. Hãy giải thích bằng ngôn ngữ đơn giản lỗi này nghĩa là gì, rồi sửa giúp tôi.\n\n[dán thông báo lỗi vào đây]"],
    ["note", "Trong Claude Code, Claude thường tự thấy lỗi và tự sửa. Bạn chỉ cần can thiệp khi nó bị lặp lại nhiều lần."]
  ],
  exercise: "Dùng prompt chọn việc ở trên với danh sách công việc thật của bạn. Lưu lại câu trả lời, đó sẽ là \"lộ trình tự động hoá\" riêng của bạn.",
  recap: ["Chọn việc lặp lại, có quy tắc", "Nhờ Claude giải thích mọi khái niệm lạ", "Gặp lỗi: dán nguyên văn, hỏi nguyên nhân"]
},
/* ---------------- BÀI 4 ---------------- */
{
  part: "2 · An toàn", min: 5,
  title: "File, thư mục và cấp quyền cho AI",
  lead: "Claude Code làm việc trên máy thật của bạn, vì vậy cần biết nó được phép chạm vào đâu và làm sao để luôn nắm quyền kiểm soát.",
  goals: ["Tạo thư mục làm việc riêng", "Hiểu cơ chế xin phép của Claude", "Biết cách dừng và quay lui"],
  body: [
    ["h", "Nguyên tắc vàng: mỗi dự án một thư mục"],
    ["p", "Claude Code làm việc trong <b>thư mục bạn mở nó</b>. Vì vậy, hãy tạo một thư mục riêng cho khoá học thay vì mở ở màn hình Desktop hay ổ C."],
    ["code", "Windows · PowerShell", "mkdir $HOME\\claude-hoc\ncd $HOME\\claude-hoc\nclaude"],
    ["code", "macOS · Terminal", "mkdir ~/claude-hoc\ncd ~/claude-hoc\nclaude"],
    ["warn", "Không mở Claude Code ở thư mục gốc của ổ đĩa hoặc thư mục chứa giấy tờ quan trọng. Phạm vi càng hẹp càng an toàn."],
    ["h", "Claude luôn xin phép"],
    ["p", "Mặc định, trước khi <b>sửa file</b> hoặc <b>chạy lệnh</b>, Claude sẽ hỏi bạn. Thường có các lựa chọn:"],
    ["list", [
      "<b>Yes</b>: cho phép lần này.",
      "<b>Yes, and don't ask again</b>: cho phép loại hành động này trong thư mục hiện tại.",
      "<b>No</b>: từ chối và nói cho Claude biết bạn muốn gì khác."
    ]],
    ["tip", "Khi mới học, hãy đọc kỹ từng yêu cầu xin phép. Đó là cách nhanh nhất để hiểu Claude đang làm gì."],
    ["h", "Các chế độ làm việc"],
    ["p", "Nhấn <b>Shift + Tab</b> để chuyển giữa các chế độ:"],
    ["list", [
      "<b>Mặc định</b>: hỏi trước mỗi thay đổi.",
      "<b>Tự chấp nhận sửa file</b>: Claude được sửa file không cần hỏi (vẫn hỏi khi chạy lệnh).",
      "<b>Plan mode</b>: Claude chỉ đọc và lên kế hoạch, không thay đổi gì. Rất hữu ích trước một việc lớn."
    ]],
    ["h", "Dừng và quay lui"],
    ["list", [
      "Nhấn <b>Esc</b> một lần: dừng Claude ngay lập tức.",
      "Nhấn <b>Esc</b> hai lần (hoặc gõ <code>/rewind</code>): quay lại một thời điểm trước đó trong phiên làm việc.",
      "Gõ <code>/permissions</code>: xem và chỉnh các quyền đã cấp."
    ]],
    ["note", "Với dữ liệu quan trọng, hãy luôn làm việc trên <b>bản sao</b>, không làm trên file gốc."]
  ],
  exercise: "Tạo thư mục <code>claude-hoc</code>, mở Claude Code trong đó và yêu cầu: <i>\"Tạo file ghi-chu.txt với nội dung là 3 việc tôi muốn tự động hoá\"</i>. Quan sát hộp thoại xin phép rồi mở thư mục kiểm tra.",
  recap: ["Mỗi dự án một thư mục riêng", "Đọc kỹ khi Claude xin phép", "Esc để dừng, Esc Esc để quay lui"]
},
/* ---------------- BÀI 5 ---------------- */
{
  part: "2 · An toàn", min: 3,
  title: "Bảo vệ dữ liệu và quyền riêng tư",
  lead: "Những gì Claude đọc sẽ được gửi lên máy chủ để xử lý. Biết điều này giúp bạn quyết định đúng dữ liệu nào nên và không nên đưa vào.",
  goals: ["Hiểu dữ liệu đi đâu", "Biết loại dữ liệu cần tránh", "Biết cách ẩn danh hoá dữ liệu"],
  body: [
    ["h", "Dữ liệu của bạn đi đâu?"],
    ["p", "Claude Code chạy trên máy bạn, nhưng \"bộ não\" nằm trên máy chủ của Anthropic. Mỗi khi Claude đọc một file, nội dung file đó được gửi đi để xử lý."],
    ["h", "Không nên đưa vào"],
    ["list", [
      "Mật khẩu, mã OTP, khoá API, thông tin đăng nhập ngân hàng.",
      "Số CCCD, số tài khoản, thông tin sức khoẻ của người khác.",
      "Dữ liệu khách hàng mà hợp đồng hoặc quy định công ty không cho phép chia sẻ với bên thứ ba."
    ]],
    ["h", "Làm sao vẫn tận dụng được AI?"],
    ["p", "Dùng <b>dữ liệu mẫu</b> hoặc <b>dữ liệu đã ẩn danh</b> để xây quy trình. Khi quy trình chạy đúng, bạn có thể cho nó chạy với dữ liệu thật trong điều kiện được phép."],
    ["prompt", "Tạo một bản sao của file khach-hang.xlsx tên là khach-hang-an-danh.xlsx, trong đó thay tên bằng \"Khách 001, Khách 002…\", xoá cột số điện thoại và email, giữ nguyên các cột còn lại."],
    ["tip", "Bạn thậm chí có thể nhờ Claude tạo dữ liệu giả có cấu trúc giống hệt dữ liệu thật để luyện tập."],
    ["h", "Kiểm tra cài đặt tài khoản"],
    ["p", "Vào phần <b>Settings → Privacy</b> trong tài khoản Claude để xem chính sách sử dụng dữ liệu và các tuỳ chọn hiện có. Nếu dùng cho công ty, hãy hỏi bộ phận IT về chính sách được áp dụng."],
    ["warn", "Chính sách dữ liệu có thể thay đổi theo thời gian và theo loại tài khoản. Hãy tự đọc tài liệu chính thức thay vì chỉ dựa vào bài học này."]
  ],
  exercise: "Rà lại thư mục <code>claude-hoc</code> và các thư mục bạn định dùng. Có file nào chứa thông tin nhạy cảm không? Di chuyển chúng ra chỗ khác.",
  recap: ["Những gì Claude đọc sẽ được gửi lên máy chủ", "Tránh mật khẩu và dữ liệu cá nhân của người khác", "Xây quy trình bằng dữ liệu mẫu"]
},
/* ---------------- BÀI 6 ---------------- */
{
  part: "3 · Giao việc", min: 5,
  title: "Cách giao việc rõ ràng cho AI",
  lead: "Một công thức 5 phần giúp bạn giao bất kỳ việc gì cho Claude và nhận lại kết quả đúng ý ngay từ lần đầu.",
  goals: ["Nắm công thức giao việc 5 phần", "Dùng Plan mode cho việc lớn", "Để Claude hỏi lại bạn khi thiếu thông tin"],
  body: [
    ["h", "Công thức B-N-Đ-T-R"],
    ["list", [
      "<b>B</b>ối cảnh: Bạn là ai, việc này để làm gì, cho ai xem.",
      "<b>N</b>hiệm vụ: Cụ thể cần làm gì.",
      "<b>Đ</b>ầu ra: Kết quả ở dạng nào (file Word, Excel, slide, trang web…), lưu ở đâu.",
      "<b>T</b>iêu chí: Thế nào là \"tốt\"? Độ dài, giọng văn, mức chi tiết.",
      "<b>R</b>àng buộc: Những điều không được làm."
    ]],
    ["prompt", "Bối cảnh: Tôi là trưởng nhóm bán hàng, cần báo cáo tuần gửi giám đốc.\nNhiệm vụ: Đọc file doanh-so-tuan.xlsx và tóm tắt kết quả tuần.\nĐầu ra: File bao-cao-tuan.docx trong thư mục hiện tại.\nTiêu chí: Tối đa 1 trang, có 3 điểm nổi bật và 1 bảng so sánh với tuần trước.\nRàng buộc: Không sửa file Excel gốc. Không bịa số liệu, chỗ nào thiếu dữ liệu thì ghi rõ."],
    ["h", "Để Claude hỏi lại bạn"],
    ["p", "Không chắc mình đã mô tả đủ? Thêm câu sau vào cuối yêu cầu:"],
    ["prompt", "Trước khi bắt đầu, hãy hỏi tôi tối đa 5 câu để làm rõ những gì bạn còn chưa chắc."],
    ["h", "Plan mode cho việc lớn"],
    ["p", "Với việc nhiều bước, hãy nhấn <b>Shift + Tab</b> cho đến khi thấy <b>plan mode</b>. Claude sẽ đọc tài liệu, đề xuất kế hoạch từng bước và chờ bạn duyệt trước khi làm."],
    ["tip", "Đọc kế hoạch như đọc đề xuất của nhân viên: sửa chỗ chưa đúng ngay từ đầu rẻ hơn rất nhiều so với sửa sau khi đã làm xong."],
    ["h", "Giao việc là một cuộc hội thoại"],
    ["p", "Hiếm khi kết quả hoàn hảo ngay lần đầu. Hãy phản hồi cụ thể: <i>\"Bảng đẹp rồi, nhưng đổi đơn vị sang triệu đồng và thêm cột tỷ lệ %\"</i> tốt hơn nhiều so với <i>\"làm lại đi\"</i>."]
  ],
  exercise: "Viết lại yêu cầu ở bài tập Bài 1 theo công thức B-N-Đ-T-R, thêm câu \"hãy hỏi tôi trước\" và gửi cho Claude Code.",
  recap: ["Bối cảnh - Nhiệm vụ - Đầu ra - Tiêu chí - Ràng buộc", "Để Claude hỏi lại khi thiếu thông tin", "Dùng Plan mode cho việc nhiều bước"]
},
/* ---------------- BÀI 7 ---------------- */
{
  part: "3 · Giao việc", min: 5,
  title: "Skills: đóng gói quy trình để tái sử dụng",
  lead: "Skill là một \"sổ tay hướng dẫn\" bạn viết một lần, Claude tự mở ra dùng mỗi khi gặp đúng loại việc đó.",
  goals: ["Hiểu skill là gì", "Biết skill được lưu ở đâu", "Tạo skill đầu tiên"],
  body: [
    ["h", "Skill là gì?"],
    ["p", "Mỗi skill là một thư mục chứa file <code>SKILL.md</code>, trong đó mô tả <b>khi nào dùng</b> và <b>cách làm từng bước</b>. Claude đọc phần mô tả và tự dùng skill khi yêu cầu của bạn phù hợp, hoặc bạn gọi trực tiếp bằng dấu <code>/</code>."],
    ["p", "Hãy nghĩ về nó như quy trình chuẩn (SOP) bạn viết cho nhân viên mới."],
    ["h", "Skill được lưu ở đâu?"],
    ["list", [
      "<code>.claude/skills/</code> trong thư mục dự án: chỉ dùng cho dự án đó.",
      "<code>~/.claude/skills/</code> trong thư mục người dùng: dùng cho mọi dự án."
    ]],
    ["h", "Cấu trúc một skill"],
    ["code", ".claude/skills/email-cam-on/SKILL.md", "---\nname: email-cam-on\ndescription: Viết email cảm ơn khách hàng sau khi mua hàng. Dùng khi người dùng cần gửi lời cảm ơn khách.\n---\n\n# Quy trình viết email cảm ơn\n\n1. Hỏi tên khách và sản phẩm đã mua (nếu chưa có).\n2. Viết email dưới 100 chữ, giọng ấm áp, xưng \"chúng tôi\".\n3. Luôn kèm mã giảm giá CAMON10 cho lần mua sau.\n4. Ký tên: Đội ngũ chăm sóc khách hàng.\n5. Lưu email vào thư mục email/ với tên file là tên khách."],
    ["h", "Cách dễ nhất: nhờ Claude viết skill"],
    ["p", "Bạn không cần tự tạo thư mục. Chỉ cần mô tả quy trình:"],
    ["prompt", "Tạo cho tôi một skill tên \"email-cam-on\" trong thư mục .claude/skills của dự án này. Skill dùng để viết email cảm ơn khách hàng sau khi mua: dưới 100 chữ, giọng ấm áp, luôn kèm mã giảm giá CAMON10, lưu vào thư mục email/."],
    ["p", "Sau đó thử dùng:"],
    ["prompt", "/email-cam-on cho chị Lan đã mua bộ ấm trà gốm"],
    ["tip", "Phần <b>description</b> rất quan trọng: Claude dựa vào nó để quyết định khi nào tự dùng skill. Hãy viết rõ \"dùng khi nào\"."],
    ["note", "Sau khi tạo skill mới, nếu Claude chưa nhận ra, hãy thoát và mở lại Claude Code."]
  ],
  exercise: "Chọn một việc bạn làm thường xuyên có quy trình rõ ràng (ví dụ: viết bài đăng mạng xã hội, trả lời câu hỏi thường gặp). Nhờ Claude tạo skill cho việc đó và thử gọi nó 2 lần.",
  recap: ["Skill = quy trình chuẩn viết một lần", "Lưu trong .claude/skills/", "Description quyết định khi nào skill được dùng"]
},
/* ---------------- BÀI 8 ---------------- */
{
  part: "3 · Giao việc", min: 10, tag: "Sản phẩm 1",
  title: "Thực hành: từ file Excel thành báo cáo, rồi thành skill",
  lead: "Sản phẩm đầu tiên: biến 3 file Excel thô thành bộ slide báo cáo quý, rồi đóng gói cả quy trình để tháng sau chỉ cần một câu lệnh.",
  goals: ["Phân tích dữ liệu Excel bằng Claude Code", "Tạo bộ slide báo cáo", "Đóng gói quy trình thành skill"],
  body: [
    ["h", "Bước 0: Chuẩn bị thư mục và dữ liệu"],
    ["code", "Terminal", "mkdir bao-cao-q3\ncd bao-cao-q3\nclaude"],
    ["p", "Nếu bạn có sẵn file Excel thật (đã ẩn danh), hãy chép vào thư mục này. Nếu chưa, nhờ Claude tạo dữ liệu mẫu:"],
    ["prompt", "Tạo 3 file Excel mẫu trong thư mục du-lieu/: doanh-so-thang-7.xlsx, doanh-so-thang-8.xlsx, doanh-so-thang-9.xlsx. Mỗi file khoảng 200 dòng với các cột: Ngày, Chi nhánh (Hà Nội, Đà Nẵng, TP.HCM), Sản phẩm (5 loại), Số lượng, Đơn giá, Thành tiền. Cố tình để một vài ô trống và vài dòng trùng lặp cho giống dữ liệu thật."],
    ["h", "Bước 1: Khám phá dữ liệu"],
    ["prompt", "Đọc 3 file trong du-lieu/ và cho tôi biết: dữ liệu có những cột gì, có lỗi gì (ô trống, trùng lặp, sai định dạng), và gợi ý 5 câu hỏi kinh doanh đáng phân tích nhất."],
    ["tip", "Luôn bắt đầu bằng bước \"khám phá\". Bạn sẽ ngạc nhiên vì Claude phát hiện được nhiều vấn đề dữ liệu mà bạn chưa để ý."],
    ["h", "Bước 2: Tạo báo cáo"],
    ["prompt", "Bối cảnh: Báo cáo quý 3 gửi ban giám đốc.\nNhiệm vụ: Làm sạch dữ liệu (bỏ trùng, ghi chú các ô trống), phân tích doanh thu theo tháng, chi nhánh và sản phẩm.\nĐầu ra: Bộ slide PowerPoint bao-cao-q3.pptx khoảng 8 slide: trang bìa, tóm tắt 3 điểm chính, biểu đồ doanh thu theo tháng, so sánh chi nhánh, top sản phẩm, vấn đề cần chú ý, đề xuất, phụ lục ghi chú dữ liệu.\nTiêu chí: Mỗi slide một thông điệp rõ ràng, có biểu đồ, đơn vị triệu đồng.\nRàng buộc: Không sửa file gốc. Không bịa số."],
    ["note", "Claude có thể cần cài thêm công cụ (ví dụ thư viện để đọc Excel và tạo PowerPoint). Nó sẽ xin phép, bạn đọc và đồng ý."],
    ["h", "Bước 3: Kiểm tra và chỉnh sửa"],
    ["steps", [
      "Mở file <code>bao-cao-q3.pptx</code> và xem từng slide.",
      "Đối chiếu 2–3 con số với file Excel gốc.",
      "Phản hồi cụ thể những gì cần sửa, ví dụ: <i>\"Slide 4 đổi sang biểu đồ cột ngang, thêm nhãn số trên mỗi cột\"</i>."
    ]],
    ["h", "Bước 4: Đóng gói thành skill"],
    ["p", "Đây là bước biến 30 phút thành 1 phút cho những lần sau:"],
    ["prompt", "Hãy lưu toàn bộ quy trình chúng ta vừa làm (khám phá, làm sạch, phân tích, tạo slide, kể cả những chỉnh sửa tôi đã yêu cầu) thành một skill tên \"bao-cao-quy\" trong .claude/skills. Skill nhận vào một thư mục dữ liệu và tạo ra bộ slide cùng cấu trúc."],
    ["p", "Quý sau, bạn chỉ cần:"],
    ["prompt", "/bao-cao-quy với dữ liệu trong thư mục du-lieu-q4/"]
  ],
  exercise: "Hoàn thành đủ 4 bước. Sau đó xoá file pptx, mở phiên Claude mới và chạy lại bằng skill. So sánh thời gian giữa hai lần.",
  recap: ["Khám phá dữ liệu trước khi phân tích", "Giao việc theo công thức B-N-Đ-T-R", "Kiểm tra số liệu, rồi đóng gói thành skill"]
},
/* ---------------- BÀI 9 ---------------- */
{
  part: "3 · Giao việc", min: 4,
  title: "Artifacts: chia sẻ kết quả bằng một đường link",
  lead: "Thay vì gửi file đính kèm, bạn có thể biến kết quả thành một trang web nhỏ và chia sẻ bằng một đường link.",
  goals: ["Hiểu khi nào nên chia sẻ bằng link", "Tạo báo cáo dạng trang HTML", "Đưa trang lên mạng trong vài phút"],
  body: [
    ["h", "Vì sao nên dùng link?"],
    ["list", [
      "Người nhận mở được trên mọi thiết bị, không cần cài PowerPoint.",
      "Có thể có biểu đồ tương tác, bộ lọc, nút bấm.",
      "Cập nhật nội dung mà không cần gửi lại file."
    ]],
    ["h", "Bước 1: Tạo báo cáo dạng HTML"],
    ["prompt", "Từ phân tích quý 3 vừa rồi, tạo thêm một trang báo cáo dạng một file HTML duy nhất tên bao-cao-q3.html: có biểu đồ tương tác, bộ lọc theo chi nhánh, giao diện gọn gàng, xem tốt trên điện thoại."],
    ["p", "Mở file vừa tạo bằng trình duyệt (bấm đúp vào file) để xem trước."],
    ["h", "Bước 2: Chia sẻ bằng link"],
    ["p", "Có nhiều cách, đây là hai cách đơn giản cho người mới:"],
    ["list", [
      "<b>Artifact trên Claude.ai</b>: mở Claude trên trình duyệt, dán nội dung file HTML và yêu cầu hiển thị dưới dạng artifact, sau đó dùng nút <b>Publish / Share</b> để lấy link.",
      "<b>Netlify Drop</b>: vào trang app.netlify.com/drop, kéo thả thư mục chứa file HTML (đổi tên file thành index.html) vào, bạn nhận ngay một đường link."
    ]],
    ["warn", "Bất kỳ ai có link đều xem được. Không chia sẻ báo cáo chứa dữ liệu nội bộ nhạy cảm theo cách này."],
    ["tip", "Ở Bài 18 bạn sẽ học cách đưa trang lên mạng chuyên nghiệp hơn với GitHub, có địa chỉ cố định và dễ cập nhật."]
  ],
  exercise: "Tạo phiên bản HTML cho báo cáo Bài 8 và chia sẻ link cho một người bạn, hỏi xem họ có xem tốt trên điện thoại không.",
  recap: ["Link tiện hơn file đính kèm", "Một file HTML là đủ cho báo cáo tương tác", "Cẩn thận với dữ liệu nhạy cảm khi chia sẻ công khai"]
},
/* ---------------- BÀI 10 ---------------- */
{
  part: "4 · Bộ nhớ", min: 8,
  title: "Bộ nhớ dài hạn: CLAUDE.md và auto memory",
  lead: "Mỗi phiên làm việc mới, Claude bắt đầu lại từ đầu. CLAUDE.md là cách để Claude luôn nhớ bạn là ai và làm việc theo cách của bạn.",
  goals: ["Hiểu vì sao Claude \"quên\"", "Tạo và chỉnh sửa CLAUDE.md", "Biết các cấp độ bộ nhớ"],
  body: [
    ["h", "Vì sao cần bộ nhớ?"],
    ["p", "Khi bạn mở một phiên mới, Claude không nhớ cuộc trò chuyện hôm qua. Bạn sẽ không muốn lần nào cũng phải giải thích lại <i>\"tôi là trưởng phòng kinh doanh, báo cáo dùng đơn vị triệu đồng…\"</i>."],
    ["p", "<code>CLAUDE.md</code> là một file ghi chú mà Claude <b>tự động đọc ở đầu mỗi phiên</b>."],
    ["h", "Tạo CLAUDE.md"],
    ["p", "Trong Claude Code, gõ lệnh sau để Claude tự tìm hiểu thư mục và tạo file khởi đầu:"],
    ["code", "Trong Claude Code", "/init"],
    ["p", "Sau đó bổ sung thông tin về bạn. Ví dụ một file CLAUDE.md tốt:"],
    ["code", "CLAUDE.md", "# Về tôi\n- Tôi là trưởng nhóm bán hàng, không biết lập trình. Hãy giải thích ngắn gọn, tránh thuật ngữ.\n- Luôn trả lời bằng tiếng Việt.\n\n# Quy ước\n- Tiền tệ: triệu đồng, làm tròn 1 chữ số thập phân.\n- Ngày tháng: dd/mm/yyyy.\n- File gốc trong du-lieu/ là chỉ đọc, KHÔNG được sửa.\n- Kết quả lưu vào thư mục ket-qua/.\n\n# Phong cách báo cáo\n- Mỗi slide một thông điệp.\n- Màu chủ đạo: xanh navy và cam."],
    ["h", "Các cấp độ bộ nhớ"],
    ["list", [
      "<code>CLAUDE.md</code> trong thư mục dự án: quy ước riêng của dự án đó.",
      "<code>~/.claude/CLAUDE.md</code>: sở thích chung của bạn, áp dụng cho mọi dự án.",
      "<b>Auto memory</b>: ở các phiên bản mới, Claude có thể tự ghi chú lại những điều học được trong quá trình làm việc với bạn."
    ]],
    ["p", "Gõ <code>/memory</code> để xem và chỉnh các file bộ nhớ đang được dùng."],
    ["tip", "Mỗi khi phải nhắc Claude cùng một điều lần thứ hai, hãy bảo: <i>\"Ghi điều này vào CLAUDE.md để lần sau bạn nhớ\"</i>."],
    ["warn", "Đừng nhồi quá nhiều vào CLAUDE.md. File càng dài càng tốn \"chỗ\" trong bộ nhớ làm việc (xem bài tiếp theo). Giữ ngắn gọn, chỉ những điều thực sự quan trọng."]
  ],
  exercise: "Chạy <code>/init</code> trong thư mục bao-cao-q3, bổ sung phần \"Về tôi\" và \"Quy ước\". Mở phiên mới và hỏi <i>\"Bạn biết gì về tôi?\"</i> để kiểm tra.",
  recap: ["Claude quên giữa các phiên", "CLAUDE.md được đọc tự động mỗi phiên", "Giữ ngắn gọn, cập nhật thường xuyên"]
}
];

window.LESSONS.push(
/* ---------------- BÀI 11 ---------------- */
{
  part: "4 · Bộ nhớ", min: 4,
  title: "Context window là gì và vì sao quan trọng",
  lead: "Context window là \"mặt bàn làm việc\" của Claude. Bàn càng bừa bộn, Claude càng dễ quên và làm sai.",
  goals: ["Hiểu khái niệm context window", "Nhận biết dấu hiệu bàn đã đầy", "Dùng /clear và /compact đúng lúc"],
  body: [
    ["h", "Một phép so sánh"],
    ["p", "Hãy tưởng tượng Claude làm việc trên một chiếc bàn có kích thước cố định. Mọi thứ đều được đặt lên bàn: CLAUDE.md, các file Claude đã đọc, toàn bộ cuộc trò chuyện, kết quả các lệnh đã chạy. Đó là <b>context window</b>."],
    ["p", "Khi bàn đầy, những thứ cũ phải bị dọn bớt và Claude có thể <b>quên các chỉ dẫn ban đầu</b>."],
    ["h", "Dấu hiệu bàn sắp đầy"],
    ["list", [
      "Claude quên những điều bạn dặn ở đầu phiên.",
      "Lặp lại lỗi đã sửa trước đó.",
      "Phản hồi chậm hơn, kém chính xác hơn."
    ]],
    ["h", "Ba lệnh cần nhớ"],
    ["code", "Trong Claude Code", "/context   # xem bàn làm việc đang đầy bao nhiêu\n/compact   # tóm tắt cuộc trò chuyện để giải phóng chỗ\n/clear     # dọn sạch bàn, bắt đầu việc mới"],
    ["h", "Thói quen tốt"],
    ["list", [
      "<b>Một phiên, một việc.</b> Xong việc báo cáo, gõ <code>/clear</code> trước khi chuyển sang việc viết email.",
      "Thông tin cần nhớ lâu dài thì ghi vào CLAUDE.md, đừng chỉ nói trong cuộc trò chuyện.",
      "Không yêu cầu Claude đọc cả thư mục lớn nếu chỉ cần một file."
    ]],
    ["tip", "Có thể dặn khi tóm tắt: <code>/compact giữ lại các quyết định về định dạng báo cáo</code>."]
  ],
  exercise: "Trong một phiên đang làm, gõ <code>/context</code> để xem mức sử dụng. Sau đó thử <code>/compact</code> và xem lại lần nữa.",
  recap: ["Context window = mặt bàn có hạn", "Một phiên một việc", "/clear khi đổi việc, /compact khi phiên dài"]
},
/* ---------------- BÀI 12 ---------------- */
{
  part: "4 · Bộ nhớ", min: 5,
  title: "Token, chi phí và prompt caching",
  lead: "Hiểu token giúp bạn dùng Claude tiết kiệm hơn, ít bị chạm giới hạn sử dụng hơn.",
  goals: ["Hiểu token là gì", "Biết điều gì làm tốn token", "Hiểu prompt caching ở mức khái niệm"],
  body: [
    ["h", "Token là gì?"],
    ["p", "AI không đọc từng chữ mà đọc từng <b>token</b>, những mẩu nhỏ của văn bản. Một từ tiếng Anh thường là 1 token, còn tiếng Việt có dấu thường tốn nhiều token hơn cho cùng một ý."],
    ["p", "Mọi thứ trên \"mặt bàn\" (context window) đều được tính bằng token, cả phần bạn gửi lẫn phần Claude trả lời."],
    ["h", "Token ảnh hưởng đến bạn thế nào?"],
    ["list", [
      "<b>Gói Pro/Max</b>: có giới hạn sử dụng theo khoảng thời gian. Dùng nhiều token sẽ chạm giới hạn sớm hơn.",
      "<b>Tài khoản API</b>: trả tiền theo số token thực tế sử dụng."
    ]],
    ["h", "Điều gì làm tốn token?"],
    ["list", [
      "Đọc file rất lớn (file Excel hàng chục nghìn dòng, PDF dài).",
      "Phiên trò chuyện kéo dài không dọn dẹp.",
      "Claude thử đi thử lại nhiều lần vì yêu cầu mơ hồ.",
      "Dùng model mạnh nhất cho cả những việc đơn giản."
    ]],
    ["h", "Prompt caching: bộ nhớ đệm"],
    ["p", "Phần đầu mỗi cuộc trò chuyện thường giống nhau (CLAUDE.md, hướng dẫn hệ thống, các file đã đọc). Hệ thống sẽ <b>lưu tạm</b> phần lặp lại này để những lần sau xử lý nhanh và rẻ hơn."],
    ["p", "Bạn không cần bật gì cả, Claude Code tự làm. Nhưng biết điều này giúp bạn hiểu vì sao nên:"],
    ["list", [
      "Giữ CLAUDE.md ổn định, không sửa liên tục trong lúc làm việc.",
      "Hạn chế đổi model giữa chừng trong một phiên dài."
    ]],
    ["tip", "Gõ <code>/cost</code> (với tài khoản API) để xem chi phí phiên hiện tại. Với gói thuê bao, xem mức sử dụng trong phần cài đặt tài khoản."]
  ],
  exercise: "Nhờ Claude: <i>\"Ước lượng giúp tôi file du-lieu/doanh-so-thang-7.xlsx khoảng bao nhiêu token nếu bạn đọc toàn bộ, và có cách nào đọc tiết kiệm hơn không?\"</i>",
  recap: ["Token là đơn vị AI đọc và tính phí", "Yêu cầu rõ ràng giúp tiết kiệm token", "Prompt caching tự động giúp nhanh và rẻ hơn"]
},
/* ---------------- BÀI 13 ---------------- */
{
  part: "4 · Bộ nhớ", min: 5,
  title: "Chọn model phù hợp cho từng loại việc",
  lead: "Claude có nhiều \"phiên bản não\" với sức mạnh và tốc độ khác nhau. Chọn đúng giúp bạn vừa nhanh vừa tiết kiệm.",
  goals: ["Biết các dòng model của Claude", "Chọn model theo loại việc", "Đổi model trong Claude Code"],
  body: [
    ["h", "Ba dòng model chính"],
    ["list", [
      "<b>Opus</b>: mạnh nhất, suy nghĩ sâu nhất. Dùng cho việc phức tạp: lên kế hoạch dự án, phân tích nhiều nguồn, xử lý vấn đề khó.",
      "<b>Sonnet</b>: cân bằng giữa chất lượng và tốc độ. Lựa chọn tốt cho phần lớn công việc hằng ngày.",
      "<b>Haiku</b>: nhanh và tiết kiệm nhất. Phù hợp với việc đơn giản, lặp lại: phân loại, trích xuất thông tin, định dạng."
    ]],
    ["note", "Tên phiên bản cụ thể (số hiệu) thay đổi theo thời gian. Hãy nhớ ba cái tên dòng model, còn phiên bản mới nhất thì xem trong lệnh /model."],
    ["h", "Đổi model"],
    ["code", "Trong Claude Code", "/model"],
    ["p", "Một danh sách hiện ra, dùng phím mũi tên để chọn và nhấn Enter."],
    ["h", "Gợi ý chọn model"],
    ["list", [
      "Lên kế hoạch cho website, thiết kế quy trình mới → <b>Opus</b>.",
      "Tạo báo cáo, viết nội dung, sửa file → <b>Sonnet</b>.",
      "Đổi tên 200 file, phân loại email, trích số liệu → <b>Haiku</b>."
    ]],
    ["tip", "Một chiến lược hiệu quả: dùng model mạnh để <b>lên kế hoạch</b> (Plan mode), rồi chuyển sang model nhanh hơn để <b>thực hiện</b>."]
  ],
  exercise: "Giao cùng một yêu cầu đơn giản (ví dụ viết 5 tiêu đề bài đăng) cho hai model khác nhau. So sánh chất lượng và tốc độ.",
  recap: ["Opus: mạnh nhất", "Sonnet: dùng hằng ngày", "Haiku: nhanh, rẻ, việc đơn giản"]
},
/* ---------------- BÀI 14 ---------------- */
{
  part: "5 · Kết nối", min: 6,
  title: "Kết nối công cụ: connectors, API và MCP",
  lead: "Mặc định Claude chỉ thấy các file trên máy bạn. Kết nối giúp Claude làm việc được với Gmail, Google Drive, Notion, lịch… và nhiều dịch vụ khác.",
  goals: ["Hiểu API và MCP ở mức khái niệm", "Thêm một kết nối MCP", "Biết cách dùng kết nối an toàn"],
  body: [
    ["h", "API là gì?"],
    ["p", "API giống như <b>quầy giao dịch</b> của một dịch vụ. Thay vì vào nhà bếp (cơ sở dữ liệu), bạn gửi yêu cầu qua quầy theo đúng mẫu và nhận lại kết quả. Thời tiết, tỷ giá, tin tức… đều có API."],
    ["h", "MCP là gì?"],
    ["p", "MCP (Model Context Protocol) là một <b>chuẩn kết nối chung</b> giữa AI và các công cụ, giống như cổng USB-C: một chuẩn cắm được nhiều thiết bị. Khi một dịch vụ có \"MCP server\", bạn có thể cắm nó vào Claude."],
    ["h", "Connectors"],
    ["p", "Trên Claude.ai và ứng dụng Claude, các kết nối phổ biến được gọi là <b>connectors</b>, bật lên bằng vài cú bấm trong phần cài đặt. Trong Claude Code, bạn thêm kết nối bằng lệnh."],
    ["h", "Thêm kết nối trong Claude Code"],
    ["p", "Ví dụ thêm kết nối tới Notion (chạy trong Terminal, không phải bên trong Claude):"],
    ["code", "Terminal", "claude mcp add --transport http notion https://mcp.notion.com/mcp"],
    ["p", "Sau đó mở Claude Code, gõ lệnh sau để xem và đăng nhập các kết nối:"],
    ["code", "Trong Claude Code", "/mcp"],
    ["p", "Không biết lệnh cho dịch vụ khác? Hỏi Claude:"],
    ["prompt", "Tôi muốn kết nối Claude Code với [tên dịch vụ]. Hãy tìm hướng dẫn chính thức và chỉ tôi từng bước, giải thích mỗi bước để làm gì."],
    ["warn", "Chỉ cài MCP server từ nguồn chính thức hoặc đáng tin cậy. Một kết nối có nghĩa là Claude có thể đọc (và đôi khi sửa) dữ liệu ở dịch vụ đó."],
    ["tip", "Bắt đầu với quyền <b>chỉ đọc</b> nếu dịch vụ cho phép chọn. Khi đã quen mới cấp thêm quyền ghi."]
  ],
  exercise: "Chọn một dịch vụ bạn dùng hằng ngày, nhờ Claude tìm cách kết nối và thử một yêu cầu đơn giản như <i>\"liệt kê 5 trang mới nhất trong Notion của tôi\"</i>.",
  recap: ["API: quầy giao dịch của dịch vụ", "MCP: chuẩn cắm chung cho AI", "Chỉ kết nối nguồn đáng tin, bắt đầu bằng quyền đọc"]
},
/* ---------------- BÀI 15 ---------------- */
{
  part: "5 · Kết nối", min: 10, tag: "Sản phẩm 2",
  title: "Thực hành: bản tin buổi sáng tự chạy hằng ngày",
  lead: "Sản phẩm thứ hai: một trang bản tin cá nhân tổng hợp đúng những gì bạn cần biết, tự cập nhật lúc 8 giờ mỗi sáng ngày làm việc.",
  goals: ["Để Claude phỏng vấn để hiểu nhu cầu", "Xây trang bản tin", "Hẹn giờ cho bản tin tự chạy"],
  body: [
    ["h", "Bước 1: Tạo thư mục và để Claude phỏng vấn bạn"],
    ["code", "Terminal", "mkdir ban-tin\ncd ban-tin\nclaude"],
    ["prompt", "Tôi muốn có một bản tin buổi sáng cá nhân. Hãy phỏng vấn tôi, mỗi lần chỉ hỏi MỘT câu, để tìm hiểu: tôi làm nghề gì, cần theo dõi những chủ đề nào, nguồn tin nào tôi tin tưởng, có muốn xem thời tiết, tỷ giá, giá vàng không, và tôi thích đọc dạng ngắn hay chi tiết. Sau khoảng 6–8 câu, tóm tắt lại và ghi vào CLAUDE.md."],
    ["h", "Bước 2: Xây bản tin"],
    ["prompt", "Dựa trên CLAUDE.md, tạo bản tin hôm nay dưới dạng file ban-tin.html: lấy tin từ các nguồn đã chọn (ưu tiên RSS hoặc API miễn phí), mỗi tin tóm tắt 2 câu kèm link gốc, giao diện dễ đọc trên điện thoại. Đồng thời viết một file hướng dẫn cach-cap-nhat.md mô tả quy trình để lần sau chỉ cần đọc file này là làm được."],
    ["p", "Mở <code>ban-tin.html</code> để xem. Chỉnh sửa đến khi bạn hài lòng."],
    ["h", "Bước 3: Chạy không cần mở Claude"],
    ["p", "Claude Code có chế độ chạy một lệnh rồi tự thoát, dùng cờ <code>-p</code>. Thử chạy trong Terminal:"],
    ["code", "Terminal", "claude -p \"Cập nhật ban-tin.html cho ngày hôm nay theo hướng dẫn trong cach-cap-nhat.md\" --permission-mode acceptEdits"],
    ["warn", "Chế độ tự chạy cho phép Claude sửa file không cần hỏi. Chỉ dùng trong thư mục riêng của bản tin và sau khi đã kiểm tra quy trình chạy đúng."],
    ["h", "Bước 4: Hẹn giờ mỗi sáng"],
    ["p", "Cách đơn giản nhất là nhờ Claude thiết lập giúp:"],
    ["prompt", "Hãy thiết lập để lệnh cập nhật bản tin tự chạy lúc 8:00 sáng từ thứ Hai đến thứ Sáu trên máy này. Dùng Task Scheduler nếu là Windows, hoặc cron/launchd nếu là macOS. Giải thích từng bước và cách tắt lịch khi tôi không cần nữa."],
    ["p", "Tham khảo, trên Windows lệnh sẽ có dạng như sau:"],
    ["code", "Windows · PowerShell", "schtasks /create /tn \"BanTinSang\" /sc weekly /d MON,TUE,WED,THU,FRI /st 08:00 /tr \"powershell -File C:\\Users\\TenBan\\ban-tin\\chay.ps1\""],
    ["note", "Máy tính cần đang bật (không tắt nguồn) vào giờ hẹn thì lịch mới chạy được."],
    ["tip", "Kết hợp với Bài 9: đưa ban-tin.html lên mạng để đọc trên điện thoại khi đang uống cà phê."]
  ],
  exercise: "Hoàn thành bản tin và để nó chạy tự động ít nhất 2 buổi sáng. Ghi lại những gì bạn muốn cải thiện rồi nhờ Claude sửa.",
  recap: ["Để Claude phỏng vấn trước khi làm", "claude -p để chạy không cần mở giao diện", "Hẹn giờ bằng công cụ lập lịch của hệ điều hành"]
},
/* ---------------- BÀI 16 ---------------- */
{
  part: "6 · Go live", min: 5, tag: "Sản phẩm 3",
  title: "Để Claude phỏng vấn bạn trước khi làm",
  lead: "Bắt đầu sản phẩm thứ ba: website cá nhân. Bước đầu tiên không phải thiết kế, mà là để Claude hiểu thật rõ về bạn.",
  goals: ["Dùng kỹ thuật \"AI phỏng vấn\"", "Tạo hồ sơ nội dung cho website", "Chuẩn bị tư liệu cho bước dựng web"],
  body: [
    ["h", "Vì sao để AI phỏng vấn?"],
    ["p", "Khi tự viết giới thiệu về mình, đa số chúng ta bí từ. Nhưng khi được hỏi, chúng ta kể rất tự nhiên. Đảo vai: <b>Claude hỏi, bạn kể</b>, Claude biên tập lại thành nội dung."],
    ["h", "Bắt đầu"],
    ["code", "Terminal", "mkdir website-ca-nhan\ncd website-ca-nhan\nclaude"],
    ["prompt", "Tôi muốn làm một website giới thiệu bản thân. Hãy đóng vai một nhà báo và phỏng vấn tôi, mỗi lần MỘT câu hỏi, khoảng 10–12 câu, xoay quanh: tôi là ai, làm gì, giúp được ai, câu chuyện nghề nghiệp, thành tựu đáng kể, giá trị tôi theo đuổi, cách liên hệ. Nếu câu trả lời của tôi còn chung chung, hãy hỏi sâu thêm để có ví dụ cụ thể. Kết thúc, viết toàn bộ nội dung vào file ho-so.md, chia theo từng mục của một website."],
    ["h", "Mẹo trả lời"],
    ["list", [
      "Trả lời tự nhiên như đang nói chuyện, không cần câu văn hay.",
      "Đưa con số và ví dụ cụ thể: <i>\"đã đào tạo hơn 300 học viên\"</i> tốt hơn <i>\"có kinh nghiệm đào tạo\"</i>.",
      "Có thể trả lời \"bỏ qua\" với câu không muốn chia sẻ."
    ]],
    ["h", "Rà soát hồ sơ"],
    ["prompt", "Đọc lại ho-so.md và đề xuất: phần nào còn yếu, thiếu bằng chứng, hoặc nghe chưa giống giọng của tôi. Hỏi tôi thêm nếu cần."],
    ["warn", "Website sẽ công khai trên Internet. Đừng đưa vào địa chỉ nhà, số CCCD hay thông tin bạn không muốn người lạ biết."]
  ],
  exercise: "Hoàn thành buổi phỏng vấn và có file <code>ho-so.md</code> mà bạn hài lòng. Đây là nguyên liệu cho bài tiếp theo.",
  recap: ["Claude hỏi, bạn kể", "Cụ thể hơn chung chung", "Kiểm tra thông tin trước khi công khai"]
},
/* ---------------- BÀI 17 ---------------- */
{
  part: "6 · Go live", min: 9, tag: "Sản phẩm 3",
  title: "Sub-agents: nhiều trợ lý cùng dựng website",
  lead: "Thay vì một Claude làm tất cả, bạn có thể có một \"đội\": người viết nội dung, người thiết kế, người kiểm tra, làm việc song song.",
  goals: ["Hiểu sub-agent là gì", "Tạo sub-agent riêng", "Dựng website bằng nhiều agent song song"],
  body: [
    ["h", "Sub-agent là gì?"],
    ["p", "Sub-agent là một trợ lý phụ mà Claude chính có thể giao việc. Mỗi sub-agent có <b>bàn làm việc riêng</b> (context window riêng) và có thể có chuyên môn riêng. Lợi ích:"],
    ["list", [
      "Làm <b>song song</b> nên nhanh hơn.",
      "Bàn làm việc của Claude chính không bị bừa bộn.",
      "Mỗi agent tập trung vào một vai trò nên kết quả tốt hơn."
    ]],
    ["h", "Cách 1: Yêu cầu trực tiếp"],
    ["prompt", "Dựa trên ho-so.md, hãy dựng một website cá nhân một trang (HTML, CSS, không cần framework). Dùng sub-agents làm song song:\n1. Một agent biên tập nội dung từ ho-so.md thành các đoạn văn ngắn gọn, hấp dẫn.\n2. Một agent thiết kế giao diện: hiện đại, tối giản, đẹp trên điện thoại.\n3. Sau khi xong, một agent kiểm tra: lỗi chính tả, link hỏng, hiển thị trên màn hình nhỏ.\nGộp kết quả thành thư mục site/ với file index.html."],
    ["h", "Cách 2: Tạo sub-agent dùng lâu dài"],
    ["p", "Gõ lệnh sau để mở trình quản lý agent và tạo agent mới theo hướng dẫn:"],
    ["code", "Trong Claude Code", "/agents"],
    ["p", "Agent được lưu dưới dạng file trong <code>.claude/agents/</code>. Ví dụ một agent kiểm tra:"],
    ["code", ".claude/agents/nguoi-kiem-tra.md", "---\nname: nguoi-kiem-tra\ndescription: Kiểm tra chất lượng website trước khi đăng. Dùng sau khi hoàn thành hoặc sửa đổi trang web.\ntools: Read, Grep, Glob\n---\n\nBạn là biên tập viên khó tính. Hãy kiểm tra:\n- Lỗi chính tả và ngữ pháp tiếng Việt\n- Link hỏng hoặc thiếu\n- Ảnh thiếu mô tả (alt)\n- Nội dung có khớp với ho-so.md không\nTrả về danh sách vấn đề, xếp theo mức độ nghiêm trọng. KHÔNG tự sửa file."],
    ["tip", "Cấp cho agent kiểm tra chỉ quyền <b>đọc</b> (Read, Grep, Glob) để nó không vô tình sửa nội dung."],
    ["h", "Xem trước website"],
    ["p", "Mở file <code>site/index.html</code> bằng trình duyệt. Muốn sửa gì cứ nói với Claude, ví dụ: <i>\"Đổi màu chủ đạo sang xanh lá, thêm phần cảm nhận của học viên\"</i>."]
  ],
  exercise: "Dựng website bằng sub-agents, sau đó tạo agent <code>nguoi-kiem-tra</code> và yêu cầu: <i>\"Dùng nguoi-kiem-tra rà soát site/\"</i>.",
  recap: ["Sub-agent có bàn làm việc riêng", "Làm song song, mỗi agent một vai", "Agent kiểm tra chỉ nên có quyền đọc"]
},
/* ---------------- BÀI 18 ---------------- */
{
  part: "6 · Go live", min: 10, tag: "Sản phẩm 3",
  title: "GitHub và đưa website lên mạng",
  lead: "Bước cuối của sản phẩm thứ ba: lưu website lên GitHub và cho nó \"go live\" với địa chỉ riêng, miễn phí.",
  goals: ["Hiểu GitHub là gì", "Đưa website lên GitHub Pages", "Biết cách cập nhật website sau này"],
  body: [
    ["h", "GitHub là gì?"],
    ["p", "GitHub giống như Google Drive dành cho dự án, nhưng có thêm khả năng <b>lưu lại lịch sử mọi thay đổi</b>. Đặc biệt, GitHub Pages cho phép bạn đưa website lên mạng <b>miễn phí</b>."],
    ["list", [
      "<b>Repository (repo)</b>: một thư mục dự án trên GitHub.",
      "<b>Commit</b>: một lần lưu thay đổi, kèm ghi chú.",
      "<b>Push</b>: đẩy thay đổi từ máy lên GitHub."
    ]],
    ["h", "Bước 1: Tạo tài khoản và cài công cụ"],
    ["steps", [
      "Đăng ký tài khoản miễn phí tại github.com.",
      "Cài GitHub CLI theo lệnh bên dưới.",
      "Đóng và mở lại Terminal, rồi đăng nhập."
    ]],
    ["code", "Windows · PowerShell", "winget install --id GitHub.cli\nwinget install --id Git.Git"],
    ["code", "macOS · Terminal", "brew install gh git"],
    ["code", "Đăng nhập (mọi hệ điều hành)", "gh auth login"],
    ["note", "macOS chưa có Homebrew? Hỏi Claude: \"Hướng dẫn tôi cài Homebrew\". Khi chạy gh auth login, chọn GitHub.com, HTTPS và đăng nhập bằng trình duyệt."],
    ["h", "Bước 2: Nhờ Claude đưa website lên mạng"],
    ["p", "Mở Claude Code trong thư mục <code>website-ca-nhan</code>:"],
    ["prompt", "Hãy đưa website trong thư mục site/ lên mạng bằng GitHub Pages: khởi tạo git, tạo repo công khai tên \"website-ca-nhan\" bằng GitHub CLI, push code, bật GitHub Pages và cho tôi đường link cuối cùng. Giải thích ngắn gọn từng bước bạn làm."],
    ["p", "Sau 1–2 phút, website của bạn sẽ có địa chỉ dạng <code>https://ten-tai-khoan.github.io/website-ca-nhan</code>."],
    ["h", "Bước 3: Cập nhật website"],
    ["prompt", "Thêm mục \"Dự án tiêu biểu\" vào website với 3 dự án trong ho-so.md, rồi commit và push lên GitHub."],
    ["warn", "Repo công khai nghĩa là ai cũng xem được mã nguồn. Không bao giờ để mật khẩu, khoá API hay dữ liệu cá nhân trong thư mục này."],
    ["tip", "Muốn tên miền riêng (ví dụ tenban.com)? Mua tên miền và hỏi Claude cách trỏ về GitHub Pages. Ngoài GitHub Pages còn có Vercel, Netlify cũng rất dễ dùng."]
  ],
  exercise: "Đưa website lên mạng, gửi link cho 3 người bạn và nhờ họ góp ý. Dùng Claude để cập nhật theo góp ý.",
  recap: ["GitHub lưu dự án và lịch sử thay đổi", "GitHub Pages: đưa web lên mạng miễn phí", "Cập nhật = sửa + commit + push"]
},
/* ---------------- BÀI 19 ---------------- */
{
  part: "7 · Tổng kết", min: 5,
  title: "Ghép mọi thứ lại: hệ điều hành AI của riêng bạn",
  lead: "Bạn đã có đủ các mảnh ghép. Khi kết hợp lại, chúng tạo thành một \"hệ điều hành AI\" vận hành công việc hằng ngày của bạn.",
  goals: ["Nhìn lại các mảnh ghép đã học", "Hiểu cách chúng kết hợp", "Thiết kế hệ thống cho riêng mình"],
  body: [
    ["h", "Các mảnh ghép"],
    ["list", [
      "<b>CLAUDE.md</b>, bộ nhớ: Claude biết bạn là ai, làm việc theo cách nào.",
      "<b>Skills</b>, quy trình: những việc lặp lại được đóng gói, gọi bằng một câu.",
      "<b>MCP / Connectors</b>, giác quan: Claude nhìn thấy email, lịch, tài liệu của bạn.",
      "<b>Lịch tự chạy</b>, nhịp tim: các việc diễn ra mà bạn không cần nhớ.",
      "<b>Sub-agents</b>, đội ngũ: nhiều trợ lý chuyên môn làm song song.",
      "<b>GitHub / link</b>, đầu ra: kết quả được chia sẻ ra thế giới."
    ]],
    ["h", "Một cấu trúc thư mục gợi ý"],
    ["code", "Cấu trúc thư mục", "ai-cua-toi/\n├── CLAUDE.md              # tôi là ai, quy ước chung\n├── .claude/\n│   ├── skills/\n│   │   ├── bao-cao-quy/\n│   │   ├── email-cam-on/\n│   │   └── bai-dang-mxh/\n│   └── agents/\n│       └── nguoi-kiem-tra.md\n├── ban-tin/               # chạy 8:00 mỗi sáng\n├── bao-cao/\n└── website-ca-nhan/"],
    ["h", "Thiết kế hệ thống của bạn"],
    ["prompt", "Dựa trên những gì bạn biết về công việc của tôi trong CLAUDE.md, hãy đề xuất một \"hệ điều hành AI\" cá nhân: những skill nào nên có, kết nối nào nên bật, việc nào nên chạy tự động theo lịch, và thứ tự nên xây dựng trong 4 tuần tới. Trình bày dạng bảng."],
    ["tip", "Đừng xây tất cả cùng lúc. Mỗi tuần thêm <b>một mảnh ghép</b> và dùng thật trước khi thêm mảnh tiếp theo."]
  ],
  exercise: "Chạy prompt thiết kế hệ thống ở trên và chọn ra <b>một việc</b> để bắt đầu xây ngay trong tuần này.",
  recap: ["Bộ nhớ + Quy trình + Kết nối + Lịch + Đội ngũ", "Xây từng mảnh, dùng thật rồi mới mở rộng"]
},
/* ---------------- BÀI 20 ---------------- */
{
  part: "7 · Tổng kết", min: 4,
  title: "Đi tiếp từ đây",
  lead: "Chúc mừng bạn đã hoàn thành khoá học! Đây là cách để tiếp tục tiến bộ sau khi khoá học kết thúc.",
  goals: ["Có kế hoạch 30 ngày tiếp theo", "Biết nguồn học chính thức", "Duy trì thói quen tự động hoá"],
  body: [
    ["h", "Kế hoạch 30 ngày"],
    ["steps", [
      "<b>Tuần 1:</b> Dùng 3 sản phẩm đã làm mỗi ngày, ghi lại chỗ còn bất tiện.",
      "<b>Tuần 2:</b> Biến một việc trong danh sách ở Bài 0 thành skill.",
      "<b>Tuần 3:</b> Thêm một kết nối (email, lịch hoặc tài liệu) và một việc tự chạy theo lịch.",
      "<b>Tuần 4:</b> Chia sẻ một quy trình với đồng nghiệp và giúp họ cài đặt."
    ]],
    ["h", "Giữ một \"nhật ký tự động hoá\""],
    ["p", "Mỗi khi thấy mình làm một việc lần thứ ba, hãy ghi lại. Cuối tuần, chọn việc tốn thời gian nhất để tự động hoá."],
    ["prompt", "Tạo file nhat-ky-tu-dong-hoa.md với bảng gồm các cột: Ngày, Việc, Tần suất, Thời gian mỗi lần, Đã tự động hoá chưa. Mỗi khi tôi nói \"ghi nhật ký: …\" thì thêm một dòng vào bảng."],
    ["h", "Nguồn học tiếp"],
    ["list", [
      "Tài liệu chính thức của Claude Code trên trang tài liệu của Anthropic: luôn cập nhật nhất.",
      "Gõ <code>/help</code> trong Claude Code để khám phá các lệnh mới.",
      "Hỏi chính Claude: <i>\"Claude Code có tính năng nào mới mà tôi chưa dùng?\"</i>"
    ]],
    ["note", "Công cụ AI thay đổi rất nhanh. Tên lệnh, giao diện có thể khác đi, nhưng ba kỹ năng giao việc, kiểm tra và hệ thống hoá sẽ luôn có giá trị."],
    ["tip", "Cách học tốt nhất là dạy lại. Hãy hướng dẫn một người khác làm Sản phẩm 1, bạn sẽ hiểu sâu hơn rất nhiều."]
  ],
  exercise: "Viết ra mục tiêu tự động hoá của bạn cho 30 ngày tới và đặt lịch nhắc vào cuối mỗi tuần để xem lại.",
  recap: ["Mỗi tuần thêm một mảnh ghép", "Ghi nhật ký những việc lặp lại", "Dạy lại người khác để học sâu hơn"]
}
);
