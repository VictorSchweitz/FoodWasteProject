const slides = document.querySelectorAll('.slide')
const prevBtn = document.getElementById('previous-btn')
const nextBtn = document.getElementById('next-btn')
const isAutoSliding = true
const intervalTime = 7500
let slideInterval


// Next slide
const nextSlide = () =>
{
    // Get current class
    const currentSlide = document.querySelector('.current')

    // Remove the class of current from the current slide
    currentSlide.classList.remove('current')

    // Check for next slide
    if(currentSlide.nextElementSibling)
    {
       // Add current to next sibling
       currentSlide.nextElementSibling.classList.add('current')
    }
    else if(!currentSlide.nextElementSibling)
    {
        // Add current class to the beginning if end is reached
        slides[0].classList.add('current')
    }

    setTimeout(() => currentSlide.classList.remove('current'), 200)

}

// Previous slide
const previousSlide = () =>
{
    // Get current class
    const currentSlide = document.querySelector('.current')

    // Remove the class of current from the current slide
    currentSlide.classList.remove('current')

    // Check for previous slide
    if(currentSlide.previousElementSibling)
    {
        // Add current to previous sibling
        currentSlide.previousElementSibling.classList.add('current')
    }
    else if(!currentSlide.previousElementSibling)
    {
        // Add current class to the end if end is reached
        slides[slides.length - 1].classList.add('current')
    }

    setTimeout(() => currentSlide.classList.remove('current'), 200)

}

// Button events //

// Next slide
nextBtn.addEventListener('click', () =>
{
    nextSlide()

    if(isAutoSliding)
    {
        // Resetting auto slide time
        clearInterval(slideInterval)

        // Run next slide at interval time
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})

// Previous slide
prevBtn.addEventListener('click', () =>
{
    previousSlide()

    if(isAutoSliding)
    {
        // Resetting auto slide time
        clearInterval(slideInterval)

        // Run next slide at interval time
        slideInterval = setInterval(previousSlide, intervalTime)
    }
})


// Auto slide
if(isAutoSliding)
{
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
}