#include "stdio.h"

#ifndef __A_H__
#define __A_H__
typedef unsigned char *byte_pointer;
void show_int(int x);
void show_float(float x);
void show_pointer(void *x);
void show_bytes(byte_pointer start, size_t len);
#endif