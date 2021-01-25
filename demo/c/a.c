#include <stdio.h>
#include "a.h"
int i = 2;
void show_bytes(byte_pointer start, size_t len)
{
    int i;
    for (i = 0; i < len; i++)
        printf("       %.2x ", start[i]);
    printf("\n");
    for (i = 0; i < len; i++)
    {
        char cx = 0;
        char v = start[i];
        do
        {
            printf("%d", v >> cx & 0b00000001);

            if (cx++ % 4 == 3)
            {
                printf(" ");
            };
        } while (cx < 8);
    }
    printf("\n");

}

void show_int(int x)
{
    show_bytes((byte_pointer)&x, sizeof(int));
}

void show_float(float x)
{
    show_bytes((byte_pointer)&x, sizeof(float));
}
void show_double(double x)
{
    show_bytes((byte_pointer)&x, sizeof(double));
}
void show_long(long x)
{
    show_bytes((byte_pointer)&x, sizeof(long));
}

void show_pointer(void *x)
{
    show_bytes((byte_pointer)&x, sizeof(void *));
}