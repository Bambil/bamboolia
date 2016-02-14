/*
 * In The Name Of God
 * ========================================
 * [] File Name : main.c
 *
 * [] Creation Date : 14-02-2016
 *
 * [] Created By : Parham Alvani (parham.alvani@gmail.com)
 * =======================================
*/
/*
 * Copyright (c) 2016 Parham Alvani.
*/
#include <stdio.h>

#define MAX_BUFF 1024

int main(int argc, char *argv[])
{
	char path[MAX_BUFF];
	if (!fgets(path, MAX_BUFF, stdin))
		return -1;
	FILE *source = fopen(path, "r");
	
	char line[MAX_BUFF * MAX_BUFF];
}
