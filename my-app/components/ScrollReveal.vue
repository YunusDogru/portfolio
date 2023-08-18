
<script setup>

onMounted(()=>{
  const options = {
    threshold: 0.2
  }
  const callbackFadeBottom = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeBottom')
      }
    })
  }
  const callbackFadeRight = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeRight');
      }
    })
  }
  const callbackFadeIn = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeIn')
      }
    })
  }
  const callbackGrowUp = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('growUp')
      }
    })
  }
  const callbackShake = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('shake')
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
