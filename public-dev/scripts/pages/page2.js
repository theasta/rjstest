'use strict';

define(['jquery','modules/collections/books', 'modules/views/books'],function($, BooksCollection, BooksView){
    return function(){
        var books = new BooksCollection(),
            view = new BooksView({
            collection: books,
            el: '#main'
        });
        var description =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie varius adipiscing. Aliquam ultricies dolor vel lectus adipiscing ut tempus arcu porta. Suspendisse potenti. Nulla id dui nibh. Nam id arcu lacinia mi egestas sollicitudin. Aliquam ac lorem sollicitudin erat adipiscing molestie sit amet et ligula. Mauris bibendum dictum sapien, ut fermentum justo rutrum vitae. Morbi pharetra magna non massa ultrices semper. Praesent porttitor nulla et eros sollicitudin et dapibus mauris pretium. Proin interdum, eros at molestie eleifend, dolor dolor mattis est, non accumsan lectus tellus nec diam. Nulla porta arcu ultricies ante condimentum rhoncus. Curabitur nulla risus, cursus in ullamcorper ut, blandit sit amet sapien.<br/>Integer eu massa eu magna sodales imperdiet. Pellentesque eros velit, suscipit id feugiat in, sodales in nisl. Sed risus sem, sodales ac posuere et, pretium vitae enim. Aenean lorem tortor, fringilla ac hendrerit quis, lobortis eget urna. Integer auctor adipiscing mauris, ac sodales urna porttitor id. Sed euismod condimentum sem eu sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eget neque eget lacus porta varius quis in eros. Aliquam id dictum mauris. Nulla dictum urna quis felis condimentum at sagittis ligula dignissim. Nam porta tempus adipiscing. Donec ullamcorper sollicitudin purus, et eleifend dui porttitor in. Donec eget mauris quam.<br/><br/>Morbi in ligula mi. Morbi interdum justo et ipsum ultricies tincidunt. Etiam sit amet sem vel lorem dignissim aliquam vitae eu magna. Proin eleifend imperdiet mauris. Vestibulum lobortis ipsum eu lacus ullamcorper eget faucibus risus cursus. Morbi in magna ac magna vestibulum volutpat. Donec orci urna, auctor in suscipit eu, pretium eget ligula. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut scelerisque, urna at mattis fermentum, orci erat sagittis mi, nec eleifend arcu velit sit amet metus. Mauris urna risus, hendrerit bibendum accumsan et, suscipit non magna. Quisque aliquet condimentum tellus, at auctor nunc placerat vel. Nam vitae sapien sit amet mauris laoreet commodo quis nec turpis. Fusce pharetra, felis ac porta sollicitudin, nisl nisl lacinia lectus, in rhoncus ipsum ipsum nec nisi. Suspendisse luctus odio sed odio aliquet pellentesque.<br/>";
        var data = [
            { title: 'Demian',id:'demian', description: description},
            { title: 'Gertrud', id:'gertrud', description: description },
            { title: 'Siddhartha', id:"siddhartha", description: description},
            { title: 'Narcissus and Goldmund',  id:"narcissus", description: description},
        ];
        books.reset(data);
    };
});

