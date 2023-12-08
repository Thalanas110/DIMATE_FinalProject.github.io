section .data
filename db 'output.txt', 0 
filemode db 'w', 0          
buffer db 'hehehe C lang is moyai so I used assembly', 0

section .bss
file resd 1

section .text
global _start

_start:
    mov eax, 5     
    mov ebx, filename 
    mov ecx, 2     
    int 0x80        

    mov [file], eax

    mov eax, 4       
    mov ebx, [file] 
    mov ecx, buffer 
    mov edx, 40      
    int 0x80        

    mov eax, 6      
    mov ebx, [file] 
    int 0x80         

    mov eax, 1      
    xor ebx, ebx     
    int 0x80         