function getDupes(arr){
	return Array.from(arr.reduce(function(acc, item) {
		if(arr.indexOf(item) !== arr.lastIndexOf(item)) acc.add(item)
		return acc
	}, new Set()))
}

function nukeDupes(arr){
	return arr.reduce(function(acc, item){
		if (acc.indexOf(item) === -1) acc.push(item)
		return acc
	}, [])
}

function humaneTimestampDiff(then, now) {
    if (then === undefined || now === undefined) {
        throw Error("humaneDate requires two time stamps to compare");
    }
    if (!typeof then === typeof 1 || !typeof now === typeof 1) {
        throw Error("humaneDate requires two numbers in ms to compare");
    }
    if (now < then) {
        throw Error("Then time should be lower than now time!");
    }

    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const year = 52 * week;

    const diff = now / 1000 - then / 1000;
    if (diff < minute) return "<1m";
    if (diff < hour) return `${Math.floor(diff / minute)}m`;
    if (diff < day) return `${Math.floor(diff / hour)}h`;
    if (diff < week) return `${Math.floor(diff / day)}d`;
    if (diff < year) return `${Math.floor(diff / week)}w`;
    return `${Math.floor(diff / year)}y`;
}

function err(code, userMsg, logMsg, orig = null) {
	const err = new Error(userMsg)
	err.status = code
	err.code = code
	err.userMsg = userMsg
	err.logMsg = logMsg
	err.origMsg = orig
	return err
}

module.exports = {
	archivedArgsRegex: /^true$/,
	defaultListId: "000000000000000000000000",
	domainRegex: /^[^-][a-zA-Z0-9.-]{0,253}[^-.]$/,
	emailRegex: /(.+)@(.+){2,}\.(.+){2,}/,
	err,
	getDupes,
	hasArgsRegex: /^[a-zA-Z0-9'"]+$/,
	humaneTimestampDiff,
	intStringRegex: /^[0-9]+$/, 
	listRegex: /^[a-zA-Z0-9#]+( *[a-zA-Z0-9\\/:\-()[\].?#]+)*$/,
	listIdRegex: /^(0|A|[a-f0-9]{20})$/,
	mongoIdRegex: /^[a-f0-9]{24}$/,
	nukeDupes,
	onlyRegex: /^[a-z0-9#]+( *[a-z0-9\\/:\-()[\].?#]+)*$/,
	sortOrdersRegex: /^(dateAsc|dateDesc|lenAsc|lenDesc|alphAsc|alphDesc|user)$/,
	tagRegex: /^[a-z0-9#]+( *[a-z0-9\\/:\-()[\].?#]+)*$/,
	urlRegex: /[a-zA-Z0-9]{1,12}:\/\/[^-][a-zA-Z0-9.-]{0,253}[^-.](:\d{1,5})?\/[a-zA-Z0-9?/\-._~=]{0,255}/,
}
