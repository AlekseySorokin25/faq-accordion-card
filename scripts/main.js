const faqs = document.querySelectorAll(".questionImage");

faqs.forEach( faq => {
    faq.addEventListener("click", () => {
        if (faq.parentNode.classList.contains("active")) {

            faq.parentNode.classList.toggle("active"); 
        } else {
            faqs.forEach( faq => faq.parentNode.classList.remove("active"));

            faq.parentNode.classList.add("active");
        }
    })
})