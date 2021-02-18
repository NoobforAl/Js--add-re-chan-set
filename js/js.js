 //////             arry Table        ///////////


 var arraytable = [{
         nume: "علی",
         family: "رضایی",
         age: 26,
         phonenumber: "09876543211",
         job: "کارمند"
     },
     {
         nume: "1علی",
         family: "رضایی",
         age: 26,
         phonenumber: "09876543211",
         job: "کارمند"
     },
     {
         nume: "2علی",
         family: "رضایی",
         age: 26,
         phonenumber: "09876543211",
         job: "کارمند"
     }
 ]



 //////                        Show tabel                              //////

 let resat = function() {

     var bodytable = document.getElementById('tbody');
     let html = '';
     arraytable.forEach((arraytable, i) => {
         html += `<td>${i+1}</td>`;
         html += `<td>${arraytable.nume}</td>`;
         html += `<td>${arraytable.family}</td>`;
         html += `<td>${arraytable.age}</td>`;
         html += `<td>${arraytable.phonenumber}</td>`;
         html += `<td>${arraytable.job}</td></tr>`;
     });
     bodytable.innerHTML = html;

 }
 resat();






 ////////                       Add Table                      //////


 function succes1() {

     var error = document.getElementById('error');
     error.innerHTML = "";

     var suc1 = document.getElementById('suc1');

     var nume = document.getElementById('namee').value;

     var family = document.getElementById('namfam').value;

     var age = document.getElementById('agee').value;

     var phonenumber = document.getElementById('phonne').value;

     var job = document.getElementById('jobb').value;
     let err = null;

     if (age <= 12 || age >= 200 || isNaN(age) || age === null || age === "") {
         err = "سن مورد قبول نیست!<br/>";
     } else if (phonenumber.length !== 11 || isNaN(phonenumber) || phonenumber === null || phonenumber === "") {
         err = "شماره تلفن مورد قبول نیست!<br/>";
     } else if (nume.length <= 2 || family.length < 2 || job.length < 2 || nume === null || nume === "") {
         err = "شغل یا نام یا فامیلی کمتر از سه کارکتر است!<br/>";
     } else { err = false; }


     if (err == false) {

         const narry = {
             nume: nume,
             family: family,
             age: age,
             phonenumber: `${phonenumber}`,
             job: job
         };

         arraytable.push(narry);

         ///////////////arraytable=[...arraytable , ...narry]

         console.log(arraytable);
         suc1.innerHTML = "اعمال شد.";
         resat();
     } else {
         error.innerHTML = err;
     }
 }



 ////////                      delet Table                    //////////



 function delet() {

     var id_delet = document.getElementById('deelt').value;

     var suc2 = document.getElementById('suc2');

     var errordl = document.getElementById('errordl');

     id_delet = Number(id_delet);

     let arry = arraytable.length;

     if (id_delet === "" || id_delet === null || id_delet > arry || id_delet <= 0) {
         errordl.innerHTML = "مقدار مورد نظر در جدول نیست!";
     } else {
         arraytable.splice(id_delet - 1, 1);
         console.log(arraytable);
         suc2.innerHTML = "اعمال شد.";
         resat();
     }

 }




 ///////                  change the tabele               ///////



 function change() {
     let error = document.getElementById('chang');
     error.innerHTML = "";
     var id_ch = document.getElementById('id_ch').value;
     var suc3 = document.getElementById('suc3');

     var nume_ch = document.getElementById('namee_ch').value;

     var family_ch = document.getElementById('namfam_ch').value;

     var age_ch = document.getElementById('agee_ch').value;

     var phonnumber_ch = document.getElementById('phonne_ch').value;

     var job_ch = document.getElementById('jobb_ch').value;
     let err = null;

     id_delet = Number(id_ch);

     let arry = arraytable.length;

     if (id_ch === "" || id_ch === null || id_ch > arry || id_ch <= 0) {

         error.innerHTML = "مقدار مورد نظر در جدول نیست!";

         suc3.innerHTML = '';
     } else {
         err = true;
         error.innerHTML = '';
     }
     if (err == true) {


         if ((job_ch === null || job_ch === "") && (family_ch === null || family_ch === "") && (nume_ch === null || nume_ch === "") && (phonnumber_ch === null || phonnumber_ch === "") && (age_ch === null || age_ch === "")) {
             error.innerHTML = '';
             suc3.innerHTML = "بدون تغیر!!";
             var my = false;
         } else if (my != false) {
             error.innerHTML = '';

             suc3.innerHTML = "";







             if (nume_ch === null || nume_ch === "") {

                 var nume1 = arraytable[id_ch - 1].nume;
                 arraytable[id_ch - 1].nume = nume1;
                 resat();
             } else if (nume_ch.length <= 2) {
                 suc3.innerHTML = '';
                 error.innerHTML = "نام  کمتر از سه کارکتر است!<br/>";
                 nume1 = arraytable[id_ch - 1].nume;
                 arraytable[id_ch - 1].nume = nume1;
                 resat();

             } else {
                 nume1 = nume_ch;
                 arraytable[id_ch - 1].nume = nume1;
                 suc3.innerHTML = 'اعمال شد!!';
                 resat();
             };





             if (age_ch === null || age_ch === "") {

                 var age1 = arraytable[id_ch - 1].age;
                 arraytable[id_ch - 1].age = age1;
                 resat();
             } else if (age_ch <= 12 || age_ch >= 200 || isNaN(age_ch)) {
                 suc3.innerHTML = '';
                 error.innerHTML = "سن مورد قبول نیست!<br/>";
                 age1 = arraytable[id_ch - 1].age;
                 arraytable[id_ch - 1].age = age1;
                 resat();
             } else {
                 age1 = age_ch;
                 arraytable[id_ch - 1].age = age1;
                 suc3.innerHTML = 'اعمال شد!!';
                 resat();
             };





             if (family_ch === null || family_ch === "") {

                 var family1 = arraytable[id_ch - 1].job;
                 arraytable[id_ch - 1].family = family1;
                 resat();
             } else if (family_ch.length < 2) {
                 suc3.innerHTML = '';
                 error.innerHTML = " فامیلی کمتر از سه کارکتر است!<br/>";
                 family1 = arraytable[id_ch - 1].job;
                 arraytable[id_ch - 1].family = family1;
                 resat();

             } else {
                 family1 = family_ch;
                 arraytable[id_ch - 1].family = family1;
                 suc3.innerHTML = 'اعمال شد!!';
                 resat();
             };







             if (phonnumber_ch === null || phonnumber_ch === "") {
                 var phonnumber1 = arraytable[id_ch - 1].phonenumber;
                 arraytable[id_ch - 1].phonenumber = `${phonnumber1}`;
                 resat();
             } else if (phonnumber_ch.length !== 11 || isNaN(phonnumber_ch)) {
                 suc3.innerHTML = '';
                 phonnumber1 = arraytable[id_ch - 1].phonenumber;
                 error.innerHTML = "شماره تلفن مورد قبول نیست!<br/>";
                 arraytable[id_ch - 1].phonenumber = `${phonnumber1}`;
                 resat();
             } else {
                 phonnumber1 = phonnumber_ch;
                 arraytable[id_ch - 1].phonenumber = `${phonnumber1}`;
                 suc3.innerHTML = 'اعمال شد!!';
                 resat();
             };








             if (job_ch === null || job_ch === "") {

                 var job1 = arraytable[id_ch - 1].job;
                 arraytable[id_ch - 1].job = job1;
                 resat();
             } else if (job_ch.length < 2) {
                 suc3.innerHTML = '';
                 error.innerHTML = "شغل  کمتر از سه کارکتر است!<br/>";
                 job1 = arraytable[id_ch - 1].job;
                 arraytable[id_ch - 1].job = job1;
                 resat();
             } else {
                 job1 = job_ch;
                 arraytable[id_ch - 1].job = job1;
                 suc3.innerHTML = 'اعمال شد!!';
                 resat();
             };


         };
     }


 }