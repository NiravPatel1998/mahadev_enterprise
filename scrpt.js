function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "niravpatidar0808@gmail.com",
      Password: "Np200298@",
      To: "np901685@gmail.com",
      From: "niravpatidar0808@gmail.com  ",
      Subject: "New Contact form Enquiry",
      Body: "",
    }).then((message) => alert(message));
  }

   // $(document).ready(function() {
      //   $('.home-banner').slick({
      //    autoplay:true,
      //    dots:true,
      //    appendDots: $('.slick-slider-dots'),
      //   });

      //})
