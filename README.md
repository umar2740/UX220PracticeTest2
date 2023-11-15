# UX220PracticeTest2
## forms, css, custom elements

The actual test will be 5 questions long. Each question will be worth 2 marks. This practice test is only 3 questions long.<!DOCTYPE html>
<html lang="en">


<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
<style>
.form-box {
max-width: 500px;
margin: auto;
padding: 50px;
background: #ffffff;
border: 10px solid #f2f2f2;
}
</style>
</head>


<body>
<main>
<section id="contact">
<div id="contact_markdown"></div>
<div class="form-box">
<h1>Contact Me!</h1>
<p>Using <a href="https://getbootstrap.com">Bootstrap</a> and <a
href="https://www.formbucket.com">FormBucket</a></p>
<form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
<div class="form-group">
<label for="name">First and Last Name</label>
<input class="form-control" id="name" type="text" name="Name">
</div>
<div class="form-group">
<label for="email">Email Address</label>
<input class="form-control" id="email" type="email" name="Email">
</div>
<div class="form-group">
<label for="message">Message</label>
<textarea class="form-control" id="message" name="Message"></textarea>
</div>
<input class="btn btn-primary" type="submit" value="Submit" />
</div>
</form>
</section>
</main>
</body>


</html>      