#include "./good.h"
#include <stdio.h>
#include <stdlib.h>
#include <dlfcn.h>

extern int aax;
void sayA(char *);
void main()
{
    void *handle;
    void (*fn)(char *);
    char *err;
    handle = dlopen("./good.so", RTLD_LAZY);
    if (!handle)
    {
        printf("erro0:%s", dlerror());
        exit(1);
    }
    fn = dlsym(handle, "sayA");
    if ((err = dlerror()) != NULL)
    {
        printf("erro1:%s", err);
        exit(1);
    }

    while (1)
    {
        sleep(1);
        fn("zzzzzz");
    }
}
