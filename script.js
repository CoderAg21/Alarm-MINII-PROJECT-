function controlFunction(e) {
    if (startFirstTime ||  isSwiped) {
        anyKeySwipeToStart()
    }

    if ((e.key == "ArrowLeft") && isleft == true) {
        arrowSwipeLeft();   
    }
    
    else if ((e.key == "ArrowRight") && isright == true) {
        arrowSwipeRight();
    }
    else if ((e.key == "ArrowUp") && istop == true) {
        arrowSwipeUp()
   
    }
    else if ((e.key == "ArrowDown") && isodwn == true) {
        arrowSwipeDown();

    }
}
