function sendMail(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('ARL TRANSPORT Enquiry');
  const body=encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nRequirement:\n${message}`);
  window.location.href=`mailto:arltrasporttservice@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
