
<script setup>

onMounted(()=>{
  const options = {
    threshold: 0.2
  }
  const callbackFadeBottom = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeBottom')
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove('fadeBottom')
      }
    })
  }
  const callbackFadeRight = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeRight');
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove('fadeRight');
      }
    })
  }
  const callbackFadeIn = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeIn')
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove('fadeIn')
      }
    })
  }
  const callbackGrowUp = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('growUp')
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove('growUp')
      }
    })
  }
  const callbackShake = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('shake')
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove('shake')
      }
    })
  }
  const targetFadeBottom = document.querySelectorAll('.animFadeBottom');
  const targetFadeRight = document.querySelectorAll('.animFadeRight');
  const targetFadeIn = document.querySelectorAll('.animFadeIn');
  const targetGrowUp = document.querySelectorAll('.animGrowUp');
  const targetShake = document.querySelectorAll('.animShake');
  const targetNavFadeRight = document.querySelectorAll('.animNavFadeRight');
  
  window.addEventListener('scroll', targetFadeBottom.forEach((element) => {
    new IntersectionObserver(callbackFadeBottom, options).observe(element)
  }))
  window.addEventListener('scroll', targetFadeRight.forEach((element) => {
    new IntersectionObserver(callbackFadeRight, options).observe(element)
  }))  
  window.addEventListener('scroll', targetFadeIn.forEach((element) => {
    new IntersectionObserver(callbackFadeIn, options).observe(element)
  }))  
  window.addEventListener('scroll', targetGrowUp.forEach((element) => {
    new IntersectionObserver(callbackGrowUp, options).observe(element)
  }))  
  window.addEventListener('scroll', targetShake.forEach((element) => {
    new IntersectionObserver(callbackShake, options).observe(element)
  }))  
  window.addEventListener('scroll', targetNavFadeRight.forEach((element) => {
    new IntersectionObserver(callbackNavFadeRight, options).observe(element)
  }))  
});
</script>