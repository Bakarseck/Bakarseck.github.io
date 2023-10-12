#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<ctype.h>

#define ALPHABET_SIZE 26

char* encrypt_cesar(const char* message, int shift) {
    char* encrypted_message = (char*) malloc((strlen(message) + 1) * sizeof(char));
    int i;
    
    for (i = 0; message[i] != '\0'; i++) {
        if (isalpha(message[i])) {
            char ascii_offset = islower(message[i]) ? 'a' : 'A';
            char encrypted_char = (message[i] - ascii_offset + shift) % ALPHABET_SIZE + ascii_offset;
            encrypted_message[i] = encrypted_char;
        } else {
            encrypted_message[i] = message[i];
        }
    }
    encrypted_message[i] = '\0';
    
    return encrypted_message;
}

int main() {
    const char* message = "Hello, World!";
    int shift = 3;
    
    char* encrypted_message = encrypt_cesar(message, shift);
    
    printf("Encrypted Message: %s\n", encrypted_message);
    
    free(encrypted_message);
    
    return 0;
}

// Explication de la fonction :

//     La fonction encrypt_cesar prend deux paramètres : message qui est une chaîne de caractères représentant le message à crypter, et shift qui est le décalage à appliquer pour le chiffrement.

//     La fonction alloue dynamiquement de la mémoire pour stocker le message crypté dans la variable encrypted_message.

//     La boucle for itère sur chaque caractère du message jusqu'à atteindre le caractère nul \0 qui marque la fin de la chaîne.

//     À l'intérieur de la boucle, on vérifie si le caractère est une lettre en utilisant la fonction isalpha().

//     On détermine l'offset ASCII en fonction de la casse du caractère. Si le caractère est en minuscule, l'offset est 'a', sinon c'est 'A'.

//     On effectue le chiffrement de César en ajoutant le décalage shift au code ASCII du caractère, puis on le ramène dans la plage de lettres (de A à Z en respectant la casse).

//     Si le caractère n'est pas une lettre, on le copie directement dans encrypted_message.

//     On termine encrypted_message avec le caractère nul \0 pour indiquer la fin de la chaîne.

//     La fonction retourne encrypted_message qui contient le message crypté.

// Dans la fonction main(), un exemple d'utilisation est donné où un message est crypté avec un décalage de 3. Le message crypté est ensuite affiché à l'aide de printf(). N'oubliez pas de libérer la mémoire allouée avec free() une fois que vous avez fini d'utiliser encrypted_message.

