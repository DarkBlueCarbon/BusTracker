<?php
    require_once('lib/autoloader.php');
    use Pubnub\Pubnub;

    $publish_key = "pub-c-250cbe22-9f26-4867-8b55-f07564a80023";
    $subscribe_key = "sub-c-205e8844-2119-11e7-b284-02ee2ddab7fe";

    // ---- Robert's keys ----
//    $publish_key = "pub-c-90e13b80-865a-4707-a9f4-f4c784c4783e";
//    $subscribe_key = "sub-c-d8518e06-1575-11e7-bd07-02ee2ddab7fe";

    $pubnub = new Pubnub($publish_key, $subscribe_key);
    print_r("pubnub created\n");



//        if (strcmp($msg, "exit") == 0) {
//            print_r('<<< So long, and thanks for all the messages! >>>');
//            return false;
//        }
//        else {
//            print_r('>>> May I have some more message, please? <<<');
//            return true;
//        }

//    $result = $pubnub->publish('test_pubkey','hi!!!!!!!');
//    print_r($result);
//
//
//
//    $result = $pubnub->publish('test_pubkey','hi1');
//    print_r($result);
//
//    $result = $pubnub->publish('test_pubkey','hi 2');
//    print_r($result);
//
    $result = $pubnub->publish('test1',json_encode(array(100.9480,-70.2860)));
    print_r($result);


//$result
    $pubnub->subscribe('bus', function ($envelope) {
        $msg = $envelope['message'];
        print("\n");
        print_r('subscribe function');
        print("\n");
        print_r($msg);
        print("\n");
    });
?>