

(function ($) {

    $(document).ready(function () {



        $('.btn-picture').removeClass('hidden').hide();



        var ps = new PythonSandbox({

            codeSourceId: 'sandbox',

            codeDisplayId: 'output',

            turtleCanvasId: 'canvas',

            codeMirrorId: 'mirror',

            logToConsole: false,

            errorHandler: function (txt) { myCustomErrorHandler(txt); }

        });



        $('.killer').hide().removeClass('hidden');


        $('.runner').click(function () {

            removeImageDownloadOption();

            $('.killer').show();

            ps.execute();

            setTimeout(checkCanvasVisibility, 1000);

        });

        var availableTags = {
            "Ketchup": 'p1',
            "Atum": 'p2',
            "Cogumelos": 'p3',
            "Bolachas Cacau": 'p4',
            "Cerelac": 'p5',
            "Heineken": 'p6',
            "Gel de Banho": 'p7',
            "Lenços de Bolso": 'p8',
            "Jardineira": 'p9',
            "Leite": 'p10',
            "Natas": 'p11',
            "Ovos": 'p12',
            "Espadarte Posta": 'p13',
            "Queijo": 'p14',
            "Laranjas": 'p15',
            "Ameixa Seca": 'p16',
            "Tabuleiro": 'p17',
            "Batatas": 'p18',
            "Limpa Vidros": 'p19',
            "Oregãos": 'p20',
            "Bolachas Maria": 'p21',
            "Pedras Salgadas": 'p22',
            "Detergente Roupa": 'p23',
            "Iogurte Grego": 'p24'
        };
        var availableTags1 = [
            "Ketchup",
            "Atum",
            "Cogumelos",
            "Bolachas Cacau",
            "Cerelac",
            "Heineken",
            "Gel de Banho",
            "Lenços de Bolso",
            "Jardineira",
            "Leite",
            "Natas",
            "Ovos",
            "Espadarte Posta",
            "Queijo",
            "Laranjas",
            "Ameixa Seca",
            "Tabuleiro",
            "Batatas",
            "Limpa Vidros",
            "Oregãos",
            "Bolachas Maria",
            "Pedras Salgadas",
            "Detergente Roupa",
            "Iogurte Grego"
        ];
        $("#tags").autocomplete({
            source: availableTags1
        });

        const comprar = {}
        $('#btn-add1').click(function () {
            var produto = $("#tags").val();
            // if ($.inArray(produto,arr1)!==-1) {
            // 	// quantidade++;
            // 	// console.log(quantidade);
            // 	// arr1.pop(quantidade);
            // 	// arr1.push(quantidade);
            // 	// console.log(arr1);
            // 	// alert("já existe");
            // 	console.log("já existe");
            // 	return false;
            // }

            quantidade = 1;
            var p = availableTags[produto];
            comprar[p] = quantidade;
            console.log(comprar)

            console.log(comprar)
            var comp1 = JSON.stringify(comprar)
            console.log(comp1)
            $('.nana').html("import turtle\n\n\n\n\ndef draw_map():\n\n\tdata = 'UP;-150 25;CIRCLE_START;-100 200;FILL_START;-100 200;-100 50;-150 50;-150 200;FILL_END;-50 200;FILL_START;0 200;0 50;-50 50;-50 200;FILL_END;50 200;FILL_START;100 200;100 50;50 50;50 200;FILL_END;-150 0;FILL_START;-100 0;-100 -150;-150 -150;-150 0;FILL_END;-50 0;FILL_START;0 0;0 -150;-50 -150;-50 0;FILL_END;50 0;FILL_START;100 0;100 -150;50 -150;50 0;FILL_END;100 25;CIRCLE_START'\n\n\tt.speed(200)\n\n\tfor a in data.split(';'):\n\t\t\n\t\tt.pencolor('black')\n\n\t\tif a == 'UP':\n\t\t\tt.up()\n\t\telif a == 'CIRCLE_START':\n\t\t\tt.pencolor('red')\n\t\t\tt.dot(20)\n\t\t# elif a == 'CIRCLE_WAYPOINT':\n\t\t#     t.pencolor('white')\n\t\t#     t.dot(20)\n\t\telif a == 'FILL_START':\n\t\t\tt.begin_fill()\n\t\telif a == 'FILL_END':\n\t\t\tt.end_fill()\n\t\t\t# elif a[0]=='SECTION':\n\t\t\t#     t.pencolor('black')\n\t\t\t#     # t.write(\"seccao\",align='center',font=('Arial', 16, 'normal'))\n\t\telse:\n\n\t\t\ti = a.split(' ')\n\t\t\tt.goto(int(i[0]), int(i[1]))\n\n\ndef draw_products(lista_locais):\n\tt.speed(20)\n\tfor item in compras:\n\t\tfor code in produtos:\n\t\t\tif item == code:\n\t\t\t\tlocal_x = produtos[code][4]\n\t\t\t\tlocal_y = produtos[code][5]\n\t\t\t\tt.goto(local_x, local_y)\n\t\t\t\tt.pencolor('blue')\n\t\t\t\tt.dot(15)\n\t\t\t\tlista_locais.append((local_x, local_y))\n\treturn lista_locais\n\n\ndef draw_line(lista_locais):\n\t# a lista -125 tem elementos ? se sim qual deles está mais proximo, e agora qual existem mais algum elemento na lista se sim, qual está mais proximo, se nao vai para o way point, repete\n\tt.speed(20)\n\t\t\n\twaypoint = {}\n\twaypoint[-150] = {local[1] for local in lista_locais if local[0] == -150}\n\twaypoint[-100] = {local[1] for local in lista_locais if local[0] == -100}\n\twaypoint[-50] = {local[1] for local in lista_locais if local[0] == -50}\n\twaypoint[0] = {local[1] for local in lista_locais if local[0] == 0}\n\twaypoint[50] = {local[1] for local in lista_locais if local[0] == 50}\n\twaypoint[100] = {local[1] for local in lista_locais if local[0] == 100}\n\twaypoint[150] = {local[1] for local in lista_locais if local[0] == 150}\n\n\twaypoint_sorted = dict(sorted(waypoint.items()))\n\t\n\tt.pensize(5)\n\tt.goto(-150, 25)\n\tt.down()\n\tt.goto(-150, 25)\n\n\tfor local in waypoint_sorted:\n\t\tif len(waypoint_sorted[local]) != 0:\n\t\t\tt.goto(local, 25)\n\n\t\t\tdistancia_max = max(waypoint_sorted[local])\n\t\t\tdistancia_min = min(waypoint_sorted[local])\n\n\t\t\tif distancia_max > 0:\n\t\t\t\tt.goto(local, distancia_max)\n\t\t\t\tt.goto(local, 25)\n\t\t\tif distancia_min < 0:\n\t\t\t\tt.goto(local, distancia_min)\n\t\t\t\tt.goto(local, 25)\n\n\n\nprodutos = {   'p1': ('Ketchup', 'Mercearia Salgado', 1.59, 0.23, -150, 56),                                                \n\t'p10': ('Leite 6x1L', 'Lacticinios', 4.92, 0.06, -50, 58),                                                   \n\t'p11': ('Natas', 'Lacticinios', 0.79, 0.06, -50, 87),\n\t'p12': ('Ovos', 'Lacticinios', 0.94, 0.06, -50, 110),\n\t'p13': ('Espadarte Posta', 'Peixaria', 6.49, 0.06, -50, -140),\n\t'p14': ('Queijo', 'Charcutaria', 3.89, 0.06, 0, -80),\n\t'p15': ('Laranjas', 'Frutas e Legumes', 1.449, 0.06, 50, -40),\n\t'p16': ('Ameixa Seca', 'Frutas e Legumes', 2.0, 0.06, 50, -70),\n\t'p17': ('Tabuleiro', 'Casa', 7.0, 0.23, 100, -60),\n\t'p18': ('Batatas', 'Frutas e Legumes', 17.0, 0.06, 50, -130),\n\t'p19': ('Limpa Vidros', 'Limpeza', 3.69, 0.23, 100, 140),\n\t'p2 ': ('Atum', 'Mercearia Salgado', 3.38, 0.06, -150, 80),\n\t\"p20\": ('Oregaos', 'Mercearia Salgado', 1.42, 0.06, -150, 120),\n\t'p21': ('Bolachas Maria', 'Mercearia Doce', 2.39, 0.23, -100, 140),\n\t'p22': ('Pedras Salgadas', 'Bebidas', 2.46, 0.13, -150, -80),\n\t'p23': ('Detergente Roupa', 'Limpeza', 12.99, 0.23, 100, 120),\n\t'p24': ('Iogurte Grego', 'Lacticinios', 2.59, 0.06, -50, 130),\n\t'p3': ('Cogumelos', 'Mercearia Salgado', 1.98, 0.23, -150, 95),\n\t'p4': ('Bolachas Cacau', 'Mercearia Doce', 1.39, 0.23, -100, 60),\n\t'p5': ('Cerelac', 'Mercearia Doce', 5.65, 0.06, -100, 100),\n\t'p6': ('Heineken 12x25CL', 'Bebidas', 8.99, 0.23, -150, -130),\n\t'p7': ('Gel Banho', 'Higiene', 5.99, 0.23, 100, 130),\n\t'p8': ('Lencos de Bolso', 'Limpeza', 1.59, 0.23, 100, 60),\n\t'p9': ('Jardineira', 'Congelados', 1.99, 0.06, -50, -70)}\n\n\n\n\n\t\t\t\t\t\n\n\n\ncompras =" + comp1 + "\n\n\nt = turtle.Turtle()\nlista_locais = []\n\nturtle.Screen().bgcolor('#BBBFCA')\n\n# t.speed(100)\ndraw_map()\ndraw_products(lista_locais)\ndraw_line(lista_locais)\n\n\t\n\nturtle.Screen().exitonclick()");
            return comprar;

        });

        $('.killer').click(function () {

            ps.killTurtle();

            removeImageDownloadOption();

            // $('.killer').hide();

        });



        $('.wrapper').click(function () {

            var wrapping = $(this).data('wrap') || $(this).data('wrap') == 'true';

            ps.toggleWrapping(!wrapping);

            $(this).data('wrap', !wrapping);

            $(this).toggleClass('btn-danger btn-default');

        });



        $('.btn-picture').click(function (e) {

            var filename = $('input[name="filename"]').val() ? $('input[name="filename"]').val().replace('.py', '.png') : 'pythonsandbox-canvas.png';

            // var canvas = $('#sandboxCanvas').get(0);

            var canvas = findTurtleCanvas();

            var img = canvas.toDataURL('image/png');

            $(this).attr({

                'download': filename,

                'href': img

            });

        });





        function removeImageDownloadOption() {

            $('.btn-picture').hide();

        }



        function checkCanvasVisibility() {

            var turtleCanvas = findTurtleCanvas();

            if (turtleCanvas)

                $('.btn-picture').show();

            else

                $('.btn-picture').hide();

        }



        function findTurtleCanvas() {

            var canvas = $('#canvas').find('canvas');



            if (canvas.length && canvas.length > 1)

                return canvas.get(1);

            else

                return false;

        }



        $('.animate-control').click(function () {

            if ($(this).data('status') == 'on') {

                ps.animate(false);

                $(this).data('status', 'off');

            }

            else {

                ps.animate(true);

                $(this).data('status', 'on');

            }

            $(this).toggleClass('btn-success btn-default');

        });



        function myCustomErrorHandler(txt) {

            $('#modal .modal-body').html(txt);

            $('#modal').modal('show');



            highlightLineOnEditor(txt);

        }



        function highlightLineOnEditor(txt) {

            var line = determineLineNumberFromError(txt);

            if (!line)

                return;



            var editor = ps.getEditor();

            line--; //-- actual line numbers start at 0

            var contents = editor.getLine(line);

            console.log(contents);



            $('#modal').on('hidden.bs.modal', function (e) {

                editor.setSelection({ line: line, ch: 0 }, { line: line, ch: contents.length });

            });

        }



        function determineLineNumberFromError(txt) {

            // var regex = /^[.\s]+\sline\s(\d+)$/

            var regex = /line\s(\d+)/

            var match = txt.match(regex);

            return match ? match[1] : false;

        }



    });

})(jQuery);

