# In The Name Of God
# ========================================
# [] File Name : CMakeLists.txt
#
# [] Creation Date : 10-02-2016
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================
cmake_minimum_required(VERSION 2.6)
project(SIMP)

# Set porject imformation
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/lib")
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/lib")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin")

add_subdirectory(jansson)
add_subdirectory(src)

# The version number
set(SIMP_MAJOR_VERSION 1)
set(SIMP_MINOR_VERSION 0)

# Add personal c flags
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -O0 -g -std=gnu11 ")
set(CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS} -DDEBUG")
