
#include "a.h"
#include "stdio.h"

void test_show_bytes(int val)
{
    int ival = val;
    float fval = (float)ival;
    int *pval = &ival;
    show_int(ival);
    show_float(fval);
    show_pointer(pval);
}

void main(void)
{
    unsigned int i = 0;
    while (1)
    {
        printf("hello %d",i++);
        sleep(1000);
    }
    
}