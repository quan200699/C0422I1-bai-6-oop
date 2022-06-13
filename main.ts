import * as readline from 'readline-sync';
import {CadresManagement} from "./cadres-management";
import {Employee} from "./employee";
import {Staff} from "./staff";
import {Engineer} from "./engineer";

let cadresManagement: CadresManagement = new CadresManagement();
let choice = -1;

function showCadresList() {
    let choice = -1;
    do {
        showCadresListMenu();
        choice = +readline.question('Nhập lựa chọn của bạn:');
        let cadresList = cadresManagement.getAllCadres();
        switch (choice) {
            case 1: {
                console.log('---Danh sách cán bộ---');
                for (const cadres of cadresList) {
                    console.log(`${cadres.name}\t${cadres.birthday}\t${cadres.address}`);
                }
                break;
            }
            case 2: {
                console.log('---Danh sách công nhân---')
                for (const cadres of cadresList) {
                    if (cadres instanceof Employee) {
                        let employee = cadres as Employee; //Ép kiểu từ Cadres về Employee
                        console.log(`${employee.name}\t${employee.birthday}\t${employee.address}\t${employee.level}`);
                    }
                }
                break;
            }
            case 3: {
                console.log('---Danh sách nhân viên---')
                for (const cadres of cadresList) {
                    if (cadres instanceof Staff) {
                        let employee = cadres as Staff; //Ép kiểu từ Cadres về Staff
                        console.log(`${employee.name}\t${employee.birthday}\t${employee.address}\t${employee.job}`);
                    }
                }
                break;
            }
            case 4: {
                console.log('---Danh sách kỹ sư---')
                for (const cadres of cadresList) {
                    if (cadres instanceof Engineer) {
                        let employee = cadres as Engineer; //Ép kiểu từ Cadres về Engineer
                        console.log(`${employee.name}\t${employee.birthday}\t${employee.address}\t${employee.specialize}`);
                    }
                }
                break;
            }
        }
    } while (choice != 0)
}

function showCadresListMenu() {
    console.log('---Hiển thị danh sách cán bộ---')
    console.log('1. Hiển thị tất cả cán bộ')
    console.log('2. Hiện thị tất cả công nhân')
    console.log('3. Hiển thị tất cả nhân viên')
    console.log('4. Hiển thị tất cả kỹ sư')
    console.log('0. Quay lại menu chính')
}

function menu() {
    console.log('---Menu quản lý cán bộ---')
    console.log('1. Hiển thị danh sách cán bộ')
    console.log('2. Thêm cán bộ mới')
    console.log('3. Cập nhật thông tin cán bộ')
    console.log('4. Xóa cán bộ')
    console.log('0. Thoát chương trình')
}

function showAddCadres() {
    let choice = -1
    do {
        console.log('---Thêm cán bộ mới---');
        console.log('1. Thêm nhân viên');
        console.log('2. Thêm kỹ sư');
        console.log('3. Thêm công nhân');
        console.log('0. Quay lại chương trình');
        choice = +readline.question('Nhập lựa chọn của bạn:');
        switch (choice) {
            case 1: {
                console.log('---Thêm nhân viên mới---');
                let name = readline.question('Nhập họ tên:');
                let birthday = readline.question('Nhập ngày tháng năm sinh:');
                let address = readline.question('Nhập địa chỉ:');
                let job = readline.question('Nhập công việc:');
                let staff = new Staff(name, birthday, address, job);
                cadresManagement.addNewCadres(staff);
                break;
            }
            case 2: {
                console.log('---Thêm kỹ sư mới---');
                let name = readline.question('Nhập họ tên:');
                let birthday = readline.question('Nhập ngày tháng năm sinh:');
                let address = readline.question('Nhập địa chỉ:');
                let specialize = readline.question('Nhập chuyên môn:');
                let engineer = new Engineer(name, birthday, address, specialize);
                cadresManagement.addNewCadres(engineer);
                break;
            }
            case 3: {
                console.log('---Thêm công nhân mới---');
                let name = readline.question('Nhập họ tên:');
                let birthday = readline.question('Nhập ngày tháng năm sinh:');
                let address = readline.question('Nhập địa chỉ:');
                let level = readline.question('Nhập bậc:');
                let employee = new Employee(name, birthday, address, level);
                cadresManagement.addNewCadres(employee);
                break;
            }
        }
    } while (choice !== 0);
}

do {
    menu();
    choice = +readline.question('Nhập lựa chọn của bạn:');
    switch (choice) {
        case 1: {
            showCadresList();
            break;
        }
        case 2: {
            showAddCadres();
            break;
        }
    }
} while (choice != 0);

