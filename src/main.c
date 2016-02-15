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
#include <string.h>

#define MAX_BUFF 1024

int main(int argc, char *argv[])
{
	char path[MAX_BUFF];
	printf("Please enter filepath: ");
	if (!fgets(path, MAX_BUFF, stdin))
		return -1;
	path[strlen(path) - 1] = 0;

	FILE *source = fopen(path, "r");
	if (!source)
		perror("fopen()");

	char data_text[MAX_BUFF * MAX_BUFF];
	char line[MAX_BUFF];
	int index = 0;

	while (fgets(line, MAX_BUFF, source)) {
		strcat(data_text + index, line);
		index += strlen(line);
		data_text[index] = 0;
	}

	printf("%s\n", data_text);
}
