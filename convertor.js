$("#myForm").submit(function(event)
{
    event.preventDefault()

    var html = $("#html").val()

    var access_key = "692b1c659137e1befd4f0769c76403ee"

    window.location.href = "http://api.pdflayer.com/api/convert?access_key="+access_key+"&document_url="+html+"&page_size=A4"  


})   