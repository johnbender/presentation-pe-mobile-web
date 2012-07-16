// fastest & broken on desktop
$btn.on( "touchstart", doSomething );

// slowest
$btn.on( "click", doSomething );

// fast enough / safe
$btn.on( "vclick", doSomething );
