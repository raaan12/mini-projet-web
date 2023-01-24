//declaration de la function moyenne      
function moyenne(frm) 
{
    alert("votre moyenne est:" + parseFloat(((frm.note1.value*parseInt(frm.coe1.value))+(frm.note2.value*parseInt(frm.coe2.value))+(frm.note3.value*parseInt(frm.coe3.value)))/(parseInt(frm.coe1.value)+parseInt(frm.coe2.value)+parseInt(frm.coe3.value))));
}
