import $ from 'jquery'
var pathObject = {};

export default function(page, fun) {
    if(page && fun)
    {
        pathObject[page] = fun;
        return;
    }
    else
    {
        start();
        addClickListener();
    }
}

function addClickListener()
{
    $( 'a' ).on( "click", function(event) {
        event.preventDefault();
        var data = event.target.getAttribute('href');
        history.pushState(null, null, data);
        directTo(data);
    });
}

function start()
{
    //return player("magnus");
    let path = window.location.pathname;
    //console.log(path);
    directTo(path);
}

function directTo(newpath)
{
    const matchPlayer = /(\/players\/)([a-zA-Z]+)/g;
    let path = newpath;

    if(newpath.match(matchPlayer))
    {
        var playerId = matchPlayer.exec(newpath)[2];
        //console.log(newpath);
         //console.log(pathObject);
         //console.log(playerId);
          //return url(playerId);
        if (newpath in pathObject )
        {
            console.log(true);
           
        }

        /*if (window.history.state)
        {
            let lastviewed = window.history.state.pathname;

            if(path != lastviewed)
            {
                window.history.pushState({
                    pathname: path
                }, '', path)
            }

            let val = pathObject.get(route);
            return val(url);
        }*/
    }

}