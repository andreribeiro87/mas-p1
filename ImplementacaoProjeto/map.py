
import turtle
from tkinter import *  # Python 3


def draw_map():

    data = 'UP;-150 25;CIRCLE_START;-100 200;FILL_START;-100 200;-100 50;-150 50;-150 200;FILL_END;-50 200;FILL_START;0 200;0 50;-50 50;-50 200;FILL_END;50 200;FILL_START;100 200;100 50;50 50;50 200;FILL_END;-150 0;FILL_START;-100 0;-100 -150;-150 -150;-150 0;FILL_END;-50 0;FILL_START;0 0;0 -150;-50 -150;-50 0;FILL_END;50 0;FILL_START;100 0;100 -150;50 -150;50 0;FILL_END;100 25;CIRCLE_START'

    t.speed(200)

    for a in data.split(';'):

        t.pencolor('black')

        if a == 'UP':
            t.up()
        elif a == 'CIRCLE_START':
            t.pencolor('red')
            t.dot(20)
        # elif a == 'CIRCLE_WAYPOINT':
        #     t.pencolor('white')
        #     t.dot(20)
        elif a == 'FILL_START':
            t.begin_fill()
        elif a == 'FILL_END':
            t.end_fill()
            # elif a[0]=='SECTION':
            #     t.pencolor('black')
            #     # t.write("seccao",align='center',font=('Arial', 16, 'normal'))
        else:

            i = a.split(' ')
            t.goto(int(i[0]), int(i[1]))


def draw_products(lista_locais):
    t.speed(20)
    for item in compras:
        for code in produtos:
            if item == code:
                local_x = produtos[code][4]
                local_y = produtos[code][5]
                t.goto(local_x, local_y)
                t.pencolor('blue')
                t.dot(15)
                lista_locais.append((local_x, local_y))
    return lista_locais


def draw_line(lista_locais):
    # a lista -125 tem elementos ? se sim qual deles está mais proximo, e agora qual existem mais algum elemento na lista se sim, qual está mais proximo, se nao vai para o way point, repete
    t.speed(20)

    waypoint = {}
    waypoint[-150] = {local[1] for local in lista_locais if local[0] == -150}
    waypoint[-100] = {local[1] for local in lista_locais if local[0] == -100}
    waypoint[-50] = {local[1] for local in lista_locais if local[0] == -50}
    waypoint[0] = {local[1] for local in lista_locais if local[0] == 0}
    waypoint[50] = {local[1] for local in lista_locais if local[0] == 50}
    waypoint[100] = {local[1] for local in lista_locais if local[0] == 100}
    waypoint[150] = {local[1] for local in lista_locais if local[0] == 150}

    waypoint_sorted = dict(sorted(waypoint.items()))

    t.pensize(5)
    t.goto(-150, 25)
    t.down()
    t.goto(-150, 25)

    for local in waypoint_sorted:
        if len(waypoint_sorted[local]) != 0:
            t.goto(local, 25)

            distancia_max = max(waypoint_sorted[local])
            distancia_min = min(waypoint_sorted[local])

            if distancia_max > 0:
                t.goto(local, distancia_max)
                t.goto(local, 25)
            if distancia_min < 0:
                t.goto(local, distancia_min)
                t.goto(local, 25)


produtos = {'p1': ('Ketchup', 'Mercearia Salgado', 1.59, 0.23, -150, 56),
            'p10': ('Leite 6x1L', 'Lacticinios', 4.92, 0.06, -50, 58),
            'p11': ('Natas', 'Lacticinios', 0.79, 0.06, -50, 87),
            'p12': ('Ovos', 'Lacticinios', 0.94, 0.06, -50, 110),
            'p13': ('Espadarte Posta', 'Peixaria', 6.49, 0.06, -50, -140),
            'p14': ('Queijo', 'Charcutaria', 3.89, 0.06, 0, -80),
            'p15': ('Laranjas', 'Frutas e Legumes', 1.449, 0.06, 50, -40),
            'p16': ('Ameixa Seca', 'Frutas e Legumes', 2.0, 0.06, 50, -70),
            'p17': ('Tabuleiro', 'Casa', 7.0, 0.23, 100, -60),
            'p18': ('Batatas', 'Frutas e Legumes', 17.0, 0.06, 50, -130),
            'p19': ('Limpa Vidros', 'Limpeza', 3.69, 0.23, 100, 140),
            'p2 ': ('Atum', 'Mercearia Salgado', 3.38, 0.06, -150, 80),
            "p20": ('Oregaos', 'Mercearia Salgado', 1.42, 0.06, -150, 120),
            'p21': ('Bolachas Maria', 'Mercearia Doce', 2.39, 0.23, -100, 140),
            'p22': ('Pedras Salgadas', 'Bebidas', 2.46, 0.13, -150, -80),
            'p23': ('Detergente Roupa', 'Limpeza', 12.99, 0.23, 100, 120),
            'p24': ('Iogurte Grego', 'Lacticinios', 2.59, 0.06, -50, 130),
            'p3': ('Cogumelos', 'Mercearia Salgado', 1.98, 0.23, -150, 95),
            'p4': ('Bolachas Cacau', 'Mercearia Doce', 1.39, 0.23, -100, 60),
            'p5': ('Cerelac', 'Mercearia Doce', 5.65, 0.06, -100, 100),
            'p6': ('Heineken 12x25CL', 'Bebidas', 8.99, 0.23, -150, -130),
            'p7': ('Gel Banho', 'Higiene', 5.99, 0.23, 100, 130),
            'p8': ('Lencos de Bolso', 'Limpeza', 1.59, 0.23, 100, 60),
            'p9': ('Jardineira', 'Congelados', 1.99, 0.06, -50, -70)}


compras = {'p16': 1}


t = turtle.Turtle()
lista_locais = []
turtle.Screen().setup(360, 740)
turtle.Screen().bgcolor('#BBBFCA')

ts = turtle.getscreen()

# turtle.screensize(canvwidth=360, canvheight=740)
# t.speed(100)
draw_map()
draw_products(lista_locais)
draw_line(lista_locais)

ts.getcanvas().postscript(file="duck.eps")

turtle.Screen().exitonclick()
