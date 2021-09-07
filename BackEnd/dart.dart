import 'dart:io';
void main()
{
    var A = double.parse(stdin.readLineSync());
    var B = double.parse(stdin.readLineSync());
    var C = double.parse(stdin.readLineSync());
    var tri = ((A*C)/2).toStringAsFixed(3);
    var cir = ((C*C)*3.14159).toStringAsFixed(3); 
    var tra = (((A+B)*C)/2).toStringAsFixed(3);
    var qua = (B*B).toStringAsFixed(3);
    var ret = (A*B).toStringAsFixed(3);
    print("TRIANGULO: $tri");
    print("CIRCULO: $cir");
    print("TRAPEZIO: $tra");
    print("QUADRADO: $qua");
    print("RETANGULO: $ret");
}