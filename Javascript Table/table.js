class Elements {

    constructor(SN, Role, EmailAddress, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate) {
        this.SN = SN
        this.Role = Role
        this.EmailAddress = EmailAddress
        this.CreatedBy = CreatedBy
        this.ModifiedBy = ModifiedBy
        this.CreatedDate = CreatedDate
        this.ModifiedDate = ModifiedDate
    }
}

const Row1 = new Elements(1, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row2 = new Elements(2, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row3 = new Elements(3, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row4 = new Elements(4, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row5 = new Elements(5, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row6 = new Elements(6, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row7 = new Elements(7, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row8 = new Elements(8, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row9 = new Elements(9, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
const Row10 = new Elements(10, "Engineer", "johndoe@gmail.com", "Teslim", "Devops", "23/02/2023", "25/02/2023")
console.log(Row1);


const table = document.createElement("table")

const headerRow = table.insertRow();

headerRow.innerHTML = `
    <tr>
        <th> S/N </th>
        <th> Role </th>
        <th> EmailAddress </th>
        <th> CreatedBy</th>
        <th> CreatedDate</th>
        <th> ModifiedDate</th>
        <th> ModifiedBy </th> 
    <tr>`             


    Row1.map((items)=>{
        const tableRow= table.insertRow()
        tableRow.innerHTML =`<tr>
               <td>${items.s_n}</td>
               <td>${items.role}</td>
               <td>${items.email}</td>
               <td>${items.modifiedDate}</td>
               <td>${items.modifiedBy}</td>
               <td>${items.createdBy}</td>
               <td>${items.createdDate}</td>
           </tr>`
    })
   
    document.body.appendChild(table)



// class Elements {
    
//     static GetHeadings() {

//         return ["S/N", "Email-Address", "Created By", "Modified By", "Created Date", "Modified Date"]
//     }

//     static GetProperties() {

//         return ["sn", "emailaddress", "createdby", "modifiedby", "createddate", "modifieddate"]
//     }

//     static GetElements() {

//         return [
            
//         {
//                 sn : 1 ,
//                 emailaddress : "adeoba004@gmail.com",
//                 createdby : "Devops",
//                 modifiedby : "Teslim",
//                 createddate : 28/03/2023,
//                 modifieddate : 30/03/2023

//         } ,

//         {
//             sn : 2 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 3 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 4 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 5 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 6 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 7 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 8 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 9 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         },

//         {
//             sn : 10 ,
//             emailaddress : "adeoba004@gmail.com",
//             createdby : "Devops",
//             modifiedby : "Teslim",
//             createddate : 28/03/2023,
//             modifieddate : 30/03/2023

//         }
//      ]
    
//     }
// }

// window.onload = function() {

//     createTable1()
//     createTable2()
//     createTable3()
//     createTable4()
//     createTable5()
//     createTable6()
//     createTable7()
//     createTable8()
//     createTable9()
//     createTable10()      
// } 

// function createTable1() {
//     const elements = Elements.GetElements()
//     const headings = Elements.GetHeadings()
//     const properties = Elements.GetProperties()

// }