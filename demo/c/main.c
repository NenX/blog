
#include "a.h"
#include "stdio.h"

extern int i;
// void test_show_bytes(int val)
// {
//     int ival = val;
//     float fval = (float)ival;
//     int *pval = &ival;
//     show_int(ival);
//     show_float(fval);
//     show_pointer(pval);
// }
int gv = 1;
int g00zero00 = 0;
int ggg;
int fn(int i)
{
    static int sv = 2;
    static int sss;
    static int s00zero00 = 0;

    sv++;
    sss++;
    return i + 1;
}
int main(void)
{

    int a = 123;
    int b = fn(a);
    show_int(i);
    printf("abcd");
    return b;
}
