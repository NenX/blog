#include <stdlib.h>
#ifdef GG
#define free(ptr) myfree(ptr) ;
#define malloc(size) mymallot(size) ;
void* mymallot(size_t size);
void myfree(void *ptr);
#endif
