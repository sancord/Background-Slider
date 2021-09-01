const contain = document.querySelector('.container');
   	const containLeft = document.querySelector('.left');
   	const containRight = document.querySelector('.right');
   	const buttonDown = document.querySelector('.down-button');
   	const buttonUp = document.querySelector('.up-button');
   	const containLength = containRight.querySelectorAll('div').length;

   	let activeContainIndex = 0

   	containLeft.style.top = `-${(containLength -1) * 100}vh`

    buttonDown.addEventListener('click', () => changeContain('down'))
    buttonUp.addEventListener('click', () => changeContain('up'))

    const changeContain = (direction) => {
    	const containHeight = contain.clientHeight
    	if (direction === 'up') {
    		activeContainIndex++
            if (activeContainIndex > containLength -1) {
            	activeContainIndex = 0
            }
    	  }else if (direction === 'down'){
    		activeContainIndex--
            if (activeContainIndex < 0) {
            	activeContainIndex = containLength -1
            }
    	}
    	containRight.style.transform = `translateY(-${activeContainIndex * containHeight}px)`
    	containLeft.style.transform = `translateY(${activeContainIndex * containHeight}px)`
     }