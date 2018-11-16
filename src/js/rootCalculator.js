const rootCalculator = (target)=>{
	if(target<0)
		throw "The target can't be a negative number"

	// Method using {\sqrt {S}}=e^{{\frac {1}{2}}\ln S}.
	let resultExponentialIdentity = Math.exp((1/2)*Math.log(target))
	let babylonianMethodResult = babylonianMethod(target, target/2,2)
	let bakshaliMethodResult = bakshaliMethod(target,target/2,2)
	return {
		exponentialIdentity:resultExponentialIdentity, 
		mathjs:Math.sqrt(target),
		babylonian : babylonianMethodResult,
		baskshali : bakshaliMethodResult
	}
}

//Using the babylonian approximation method, the more iteration the better the accuracy
function babylonianMethod(target, approximation,iteration){
	if(iteration==0)
		return approximation
	let underEstimate = target/approximation
	let nextApproximation = (approximation + underEstimate)/2
	iteration -= 1
	let result = babylonianMethod(target, nextApproximation, iteration)
	return result
}

function bakshaliMethod(target, approximation,iteration){
	if(iteration == 0)
		return approximation
	let a = (target-Math.pow(approximation,2))/(2*approximation)
	let b = approximation + a
	console.log(a)
	iteration -= 1
	let nextApproximation = b - ((Math.pow(a,2))/(2*b))
	let result = bakshaliMethod(target,nextApproximation,iteration)
	return result
}


