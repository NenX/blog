#include <stdio.h>
#include <stdlib.h>

void *mymallot(size_t size)
{
    printf("malloc:%ld\n", size);
    return malloc(size);
};
void myfree(void *ptr)
{
    printf("reff:%p\n", ptr);
    return free(ptr);
};