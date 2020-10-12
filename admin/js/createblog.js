
var userEmail = sessionStorage.getItem("userEmail");
const blog = document.querySelector('#createBlog');

var photo = "";

var functionphoto = document.querySelector('#inputfile');

functionphoto.addEventListener('change', function (input) {

    file = input.target.files[0];

    var path = window.URL.createObjectURL(file);

    document.querySelector("#imageFolder").src = path;
    storage.ref("BlogPhoto").child(file.name).put(file)
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((link) => {
            // alert(link);
            photo = link;
            console.log("successfull Uploaded");
        });

});

blog.addEventListener('submit', (e) => {

    e.preventDefault();

    const title = blog['blogtitle'].value;
    const content = blog['blogcontent'].value;

    var blogData = {
        title,
        content,
        photo,
        userEmail,
        date: new Date().getTime()
    }
    db.collection("Blog").doc().set(blogData).catch(function (error) {
        console.error("Error adding document: ", error);
    }).then(function () {
        console.log('successful publish!');
        window.location.href = "createblog.html";
    });

});