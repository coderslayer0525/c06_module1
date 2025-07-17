class CustomerRequest {
    constructor() {
        this.name = document.getElementById("name").value.trim();
        this.idcard = document.getElementById("idcard").value.trim();
        this.phone = document.getElementById("phone").value.trim();
        this.email = document.getElementById("text").value.trim();
        this.service = document.getElementById("service").value.trim();
        this.stage = document.getElementById("stage").value.trim();
        this.eventType = this.getEventType();
        this.eventStyle = document.getElementById("THANH").value;
        this.budget = document.getElementById("budget").value.trim();
        this.capital = document.getElementById("capital").value.trim();
    }

    getEventType() {
        const radios = document.getElementsByName("eventType");
        for (let radio of radios) {
            if (radio.checked) {
                return radio.value;
            }
        }
            return " khong chon";
        }
        getSummary(){
            return `[PHIẾU TÓM TẮT THÔNG TIN DỊCH VỤ]
        Họ tên : ${this.name}
        CCCD: ${this.idcard}
        SĐT: ${this.phone}
        Email: ${this.email}
        Mảng sự kiện : ${this.service}
        Quy mô tổ chức : ${this.stage}
        Hình thức tổ chức : ${this.eventType}
        Loại hình tổ chức : ${this.eventStyle}
        Ngân sách dự kiến : ${this.budget} VND
        Vốn khả dụng : ${this.capital} VND
        `;
        }
    }
    function sendInfo() {
        const customer = new CustomerRequest();
        document.getElementById("ketQua").textContent= "Bạn chọn " + customer.eventStyle;
        alert("cảm ơn bạn đã sử dụng dịch vụ, vui lòng đợi kết quả từ 1-2 ngày\n\n" + customer.getSummary());
    }