#include "./good.h"
#include <stdio.h>
#include <stdlib.h>
#include <dlfcn.h>
#include <unistd.h>
#include <string.h>
#include <errno.h>
#include <wait.h>
#include <signal.h>
#define N 4

void fn(int i)
{
    printf("i am fn: %d \n", i);
}

int main(int argc, char **argv, char **envp)
{
    size_t i = 0;

    for (; i < argc; i++)
    {
        printf("%lu:%s\n", i, argv[i]);
    }
    printf(getenv("name"));
    
}