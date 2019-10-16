
    <form action="index.php?c=page&act=auth" method="post">
        <input type="text" name="login" placeholder="login">
        <input type="password" name="password" placeholder="password">
        <input type="submit" value="Auth">
        <p><?=$err?></p>
    </form>
