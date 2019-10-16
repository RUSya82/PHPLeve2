<?php
//
// Конттроллер страницы чтения.
//
include_once('m/model.php');
include_once ('engine/DB.php');
class C_Page extends C_Base
{
	//
	// Конструктор.
	//
	
	public function action_index(){
		$this->title .= '::Чтение';
		$text = text_get();
		//$today = date();
		$this->content = $this->Template('v/v_index.php', array('text' => $text));	
	}
	
    
	public function action_edit(){
		$this->title .= '::Редактирование';
		
		if($this->isPost())
		{
			text_set($_POST['text']);
			header('location: index.php');
			exit();
		}
		
		$text = text_get();
		$this->content = $this->Template('v/v_edit.php', array('text' => $text));		
	}

	public function action_auth(){
        $this->title = 'Авторизация';
	    $isAuth = false;
	    $err = '';

	    if($this->isPost()){
            $login = $_POST['login'];
            $pass = md5($_POST['password']);
            //var_dump($login);
            //var_dump($pass);
            $sql = "SELECT * FROM users WHERE name = :login";
            $conn = DB::getInstance()->getConnection();
            $result = $conn->prepare($sql);
            $result->execute(['login' => $login]);
            if($result->fetch(PDO::FETCH_ASSOC)['password'] == $pass){
                $isAuth = true;
                $_SESSION['login'] = $login;
                $err = "вы авторизованы, ваш логин " . $_SESSION['login'];
                //header('location: index.php');
                //exit();
            }
            else{
                $err = "Неверный логин или пароль";
                $isAuth = false;

            }
        }
        $this->content = $this->Template('v/auth.php', array('title' => $this->title, 'err' => $err));

    }
}
