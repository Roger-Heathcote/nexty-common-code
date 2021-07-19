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
	hasArgsRegex: /^[a-zA-Z0-9]+$/,
	intStringRegex: /^[0-9]+$/, 
	listRegex: /^[a-zA-Z0-9#]+( *[a-zA-Z0-9\\/:\-()[\].?#]+)*$/,
	listIdRegex: /^(0|A|[a-f0-9]{20})$/,
	mongoIdRegex: /^[a-f0-9]{24}$/,
	onlyRegex: /^[a-z0-9#]+( *[a-z0-9\\/:\-()[\].?#]+)*$/,
	sortOrdersRegex: /^(dateAsc|dateDesc|lenAsc|lenDesc|alphAsc|alphDesc|user)$/,
	tagRegex: /^[a-z0-9#]+( *[a-z0-9\\/:\-()[\].?#]+)*$/,
	urlRegex: /[a-zA-Z0-9]{1,12}:\/\/[^-][a-zA-Z0-9.-]{0,253}[^-.](:\d{1,5})?\/[a-zA-Z0-9?/\-._~=]{0,255}/,
}
