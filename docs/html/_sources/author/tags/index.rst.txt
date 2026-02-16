.. _question-types:

Functions 
==============


List of convenience functions for OpenTA
__________________________

Booleans

.. list-table:: Boolean arguments
   :widths: 50 50
   :header-rows: 1

   * - Function
     - Explanation
   * - Not( b1 )
     - trace of the matrix M
   * - Or( b1, b2 , ... bN)
     - b1 or b2 or b2 ... or bN
   * - And( b1, b2 , ... bN)
     - b1 and b2 and b2 ... and bN


Sympy matrix functions should work. In addition the following are available;

.. list-table:: Matrix 
   :widths: 50 50
   :header-rows: 1

   * - Function
     - Explanation
   * - Trace(M)
     - trace of the matrix M
   * - M^I or (M)^I 
     - Inverse of M
   * - M^T or (M)^T 
     - Transpose of M
   * - Transpose(M)
     -  transpose of the matrix M
   * - Conjugate(M)
     -  complex conjugate of the matrix M
   * - AreEigenvaluesOf(M,ev)
     - true if ev are the eigenvalues of M 
   * - IsDiagonalizationOf(M,v )
     - true if  M v = D v where D is a diagonal matrix
   * - IsHermitian(M)
     - true if  M  is Hermitian
   * - IsUnitary(M)
     - true if  M  is Unitary
   * - IsDiagonal(M)
     - true if  M  is a diagonal matrix
   * - IsDiagonalizable(M)
     - true if  M  is a diagonalizable matrix
   * - Rank(m) 
     - gives rank of the matrix M
   * - DiagonalOf(M) 
     - the diagonal entries of M as a row vector
   * - NullRank(M) 
     - gives the rank of the null space of M
