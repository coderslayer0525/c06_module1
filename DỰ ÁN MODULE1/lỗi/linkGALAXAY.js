class CustomerInfo {
    constructor() {
        this.name = document.getElementById("name").value.trim();
        this.idcard = document.getElementById("idcard").value.trim();
        this.phone = document.getElementById("phone").value.trim();
        this.email = document.getElementById("text").value.trim();
        this.service = document.getElementById("service").value.trim();
        this.eventType = document.querySelector('input[name="eventType"]:checked');
        this.payment = document.getElementById("THANH").value;
        this.budget = document.getElementById("budget").value.trim();
        this.capital = document.getElementById("capital").value.trim();
    }
        isValid() {
        return (
                this.name &&
                this.idcard &&
                this.phone &&
                this.email &&
                this.service &&
                this.eventType &&
                this.payment &&
                this.budget &&
                this.capital
        );
}
    displayInfo() {
        return `
            <h3>Thông tin khách hàng:</h3>
            <ul>
                <li>Ông/Bà: ${this.name}</li>
                <li>CCCD: ${this.idcard}</li>
                <li>SĐT: ${this.phone}</li>
                <li>Email: ${this.email}</li>
                <li>Dịch vụ: ${this.service}</li>
                <li>Giai đoạn: ${this.stage}</li>
                <li>Loại sự kiện: ${this.eventType.value}</li>
                <li>Hình thức thanh toán: ${this.payment}</li>
                <li>Ngân sách: ${this.budget}</li>
                <li>Vốn: ${this.capital}</li>
            </ul>
        `;
    }
}

function sendInfo() {
    const customer = new CustomerInfo();

    const resultDiv = document.getElementById("ketQua");

    if (!customer.isValid()) {
        resultDiv.innerHTML = "<span style='color:red;'>Vui lòng điền đầy đủ thông tin!</span>";
    } else {
        resultDiv.innerHTML = customer.displayInfo();
    }
}